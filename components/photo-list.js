import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Photo from './photo';

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const PhotoList = ({ photos, toggleHoverPhotoList, markerHoverPhotoId }) => (
  <div>
    <List>
      {
        photos.map((photo) => (
          <Photo
            key={photo.id}
            id={`${photo.id}`}
            photo={photo}
            toggleHoverPhotoList={toggleHoverPhotoList}
            markerHoverPhotoId={markerHoverPhotoId}
          />
        ))
      }
    </List>
  </div>
);

PhotoList.propTypes = {
  photos: PropTypes.array,
  toggleHoverPhotoList: PropTypes.func.isRequired,
  markerHoverPhotoId: PropTypes.number
};

export default PhotoList;
