import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';
import get from 'lodash.get';

import SearchHeader from '../components/search-header';
import Map from '../components/map';
import PhotoList from '../components/photo-list';
import endpoints from '../endpoints.js';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.div`
  color: red;
  font-size: 50px;
`;

const ComponentContainer = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const MapContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 55%;
  height: 100%;
`;

const ListContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 45%;
  height: 100%;
  overflow-y: scroll;
`;

class Search extends Component {

  static async getInitialProps (req) {
    const term = get(req, 'query.term') || '';

    if (term) {
      const url = endpoints.GEOCODE(term);
      const res = await fetch(url);
      const json = await res.json();
      const location = get(json, 'results[0].geometry.location') || {};

      return {
        centerLat: location.lat,
        centerLng: location.lng
      };
    }

    return {};
  }

  constructor(props) {
    super(props);

    const term = get(props, 'url.query.term') || '';

    this.state = {
      photos: [],
      photoListHoverId: 0,
      markerHoverPhotoId: 0,
      term,
      centerLat: props.centerLat || 40.735998,
      centerLng: props.centerLng || -73.951323
    };
  }

  componentWillReceiveProps(nextProps) {
    const term = get(nextProps, 'url.query.term');

    if (term && this.state.term !== term) {
      this._onSearch(term);
    }
  }

  componentDidMount() {
    this._onSearch(this.state.term);
  }

  _onBoundsChange = async (center, radius) => {
    const { lat, lng } = center;

    if (lat && lng && radius) {
      const url = endpoints.GET_PHOTOS(`${lat}, ${lng}, ${radius / 1000}km`, CONSUMER_KEY_500PX);
      const res = await fetch(url);
      const json = await res.json();

      this.setState(() => ({ photos: json.photos }));
    }
  }

  _toggleHoverPhotoList = (photoId) => {
    this.setState(() => ({ photoListHoverId: photoId }));
  }

  _toggleHoverPhotoMarker = (photoId) => {
    this.setState(() => ({ markerHoverPhotoId: photoId }));
  }

  _onSearch = async (term) => {
    const url = endpoints.GEOCODE(term);
    const res = await fetch(url);
    const json = await res.json();

    const location = get(json, 'results[0].geometry.location') || {};
    this.setState(() => ({ centerLat: location.lat, centerLng: location.lng }))
  }

  render() {
    const { photos, photoListHoverId, markerHoverPhotoId, term, centerLat, centerLng } = this.state;

    return (
      <PageContainer>
        <SearchHeader onSearch={this._onSearch} term={term} />
        <ComponentContainer>
          <MapContainer>
            <Map
              onBoundsChange={this._onBoundsChange}
              toggleHoverPhotoMarker={this._toggleHoverPhotoMarker}
              photoListHoverId={photoListHoverId}
              photos={photos}
              center={[centerLat, centerLng]}
            />
          </MapContainer>
          {(photos && photos.length) &&
            <ListContainer className="photoList">
              <PhotoList
                photos={photos}
                toggleHoverPhotoList={this._toggleHoverPhotoList}
                markerHoverPhotoId={markerHoverPhotoId}
              />
            </ListContainer>
          }
        </ComponentContainer>
      </PageContainer>
    );
  }
}

export default Search;
