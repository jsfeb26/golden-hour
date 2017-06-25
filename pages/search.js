import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';

import Map from '../components/map';
import endpoints from '../endpoints.js';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.h1`
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
  width: 62%;
  height: 100%;
`;

const ListContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 38%;
  height: 100%;
  overflow-y: scroll;
`;

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = { photos: [] };
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

  render() {
    const { photos } = this.state;

    return (
      <PageContainer>
        <Title>Search</Title>
        <ComponentContainer>
          <MapContainer>
            <Map
              onBoundsChange={this._onBoundsChange}
              photos={photos}
            />
          </MapContainer>
          {(photos && photos.length) &&
            <ListContainer>
              {
                photos.map((photo) => (
                  <div key={photo.id}>
                    <div>{photo.name}</div>
                    <div><img src={photo.image_url} /></div>
                  </div>
                ))
              }
            </ListContainer>
          }
        </ComponentContainer>
      </PageContainer>
    );
  }
}

export default Search;
