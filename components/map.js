import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import styled from 'styled-components';

import getRadius from '../helper/getRadius';

const Marker = styled.div`
  background-color: green;
  width: 100px;
`;

export default class Map extends PureComponent {
  static propTypes = {
    center: PropTypes.any,
    zoom: PropTypes.number,
    visibleRowFirst: PropTypes.number,
    visibleRowLast: PropTypes.number,
    hoveredRowIndex: PropTypes.number,
    onBoundsChange: PropTypes.func.isRequired,
    photos: PropTypes.array
  }

  static defaultProps = {
    center: [59.744465, 30.042834],
    zoom: 10,
    visibleRowFirst: -1,
    visibleRowLast: -1,
    hoveredRowIndex: -1
  }

  _onBoundsChange = ({ bounds, center, marginBounds, size, zoom }) => {
    const centerFunctions = {
      lat: () => (center.lat),
      lng: () => (center.lng)
    };
    const ne = {
      lat: () => (bounds.ne.lat),
      lng: () => (bounds.ne.lng)
    };

    const radius = getRadius({ center: centerFunctions, ne });
    this.props.onBoundsChange(center, radius);

    // this.props.onBoundsChange()
    // if (this.props.onBoundsChange) {
    //   this.props.onBoundsChange({center, zoom, bounds, marginBounds});
    // } else {
    //   this.props.onCenterChange(center);
    //   this.props.onZoomChange(zoom);
    // }
  }

  _onGoogleApiLoaded = ({ map }) => {
    const bounds = map.getBounds();
    const ne = bounds.getNorthEast();
    const center = map.getCenter();

    const radius = getRadius({ center, ne });
    const centerObj = { lat: center.lat(), lng: center.lng() };

    this.props.onBoundsChange(centerObj, radius);
  }

  render() {
    const { center, zoom, photos } = this.props;
    const photoMarkers = photos.map((photo) => {
      return (
        <Marker key={photo.id} lat={photo.latitude} lng={photo.longitude}>
          {photo.name}
        </Marker>
      );
    });

    return (
      <GoogleMap
        center={center}
        zoom={zoom}
        onChange={this._onBoundsChange}
        bootstrapURLKeys={{ libraries: 'geometry' }}
        onGoogleApiLoaded={this._onGoogleApiLoaded}
      >
        {photoMarkers}
      </GoogleMap>
    );
  }
}
