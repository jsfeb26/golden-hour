import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';

import getRadius from '../helper/getRadius';
import Marker from '../components/marker';

export default class Map extends PureComponent {
  static propTypes = {
    center: PropTypes.any,
    zoom: PropTypes.number,
    onBoundsChange: PropTypes.func.isRequired,
    toggleHoverPhotoMarker: PropTypes.func.isRequired,
    photoListHoverId: PropTypes.number,
    photos: PropTypes.array
  }

  static defaultProps = {
    zoom: 10
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
    const { center, zoom, photos, toggleHoverPhotoMarker, photoListHoverId } = this.props;
    const photoMarkers = photos.map((photo) => {
      return (
        <Marker
          key={photo.id}
          isHover={photo.id === photoListHoverId}
          toggleHoverPhotoMarker={toggleHoverPhotoMarker}
          photo={photo}
          lat={photo.latitude}
          lng={photo.longitude}
        />
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
        {(photoMarkers && photoMarkers.length) && photoMarkers}
      </GoogleMap>
    );
  }
}
