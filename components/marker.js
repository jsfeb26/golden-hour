import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import scrollTo from '../helper/scrollTo';

const Container = styled.div`
  background-image: url(/static/bubble.png);
  background-repeat: no-repeat;
  background-size: contain;
  width: 60px;
  height: 60px;
  cursor: pointer;
  &:hover {
    transform: scale(2.0, 2.0);
    transform-origin: bottom center;
    transition: -webkit-transform 0.25s cubic-bezier(0.485, 1.65, 0.545, 0.835);
    z-index: 1000;
  }
`;

const HoverContainer = styled.div`
  position: absolute;
  background-image: url(/static/bubble.png);
  background-repeat: no-repeat;
  background-size: contain;
  width: 60px;
  height: 60px;
  transform: scale(2.0, 2.0);
  transform-origin: bottom center;
  transition: -webkit-transform 0.25s cubic-bezier(0.485, 1.65, 0.545, 0.835);
  z-index: 1000;
`;

const Image = styled.img`
  position: relative;
  width: 46px;
  top: 4px;
  left: 4px;
`;

const scrollIntoView = (photoId) => {
  const parentOffest = document.getElementsByClassName("photoList")[0].offsetTop;
  const selectedOffset = document.getElementById(photoId).offsetTop;
  const scrollAmount = selectedOffset - parentOffest;

  const container = document.getElementsByClassName("photoList")[0];
  scrollTo(container, scrollAmount, 1000);
};

const Marker = ({ photo, isHover, toggleHoverPhotoMarker }) => (
  <div onClick={() => scrollIntoView(`${photo.id}`)}>
    {isHover ?
      <HoverContainer>
        <Image src={photo.image_url} />
      </HoverContainer>
      :
      <Container
        onMouseOver={() => toggleHoverPhotoMarker(photo.id)}
        onMouseOut={() => toggleHoverPhotoMarker(0)}
      >
        <Image src={photo.image_url} />
      </Container>
    }
  </div>
);

Marker.propTypes = {
  photo: PropTypes.shape({
    image_url: PropTypes.string.isRequired
  }),
  isHover: PropTypes.bool,
  toggleHoverPhotoMarker: PropTypes.func.isRequired
};

export default Marker;
