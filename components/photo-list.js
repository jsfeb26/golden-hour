import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  align-items: center;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: -webkit-transform 0.25s cubic-bezier(0.485, 1.65, 0.545, 0.835);
  }
`;

const ListItemHover = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  align-items: center;
  transform: scale(1.1, 1.1);
  transition: -webkit-transform 0.25s cubic-bezier(0.485, 1.65, 0.545, 0.835);
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #717171;
  width: 90%;
  font-size: 14px;
  padding-bottom: 18px;
`;

const ItemTitle = styled.span`
  font-size: 16px;
  padding: 9px 0;
  font-weight: bold;
`;

const Image = styled.img`
  width: 90%;
`;

const PhotoList = ({ photos, toggleHoverPhotoList, markerHoverPhotoId }) => {
  const component = (photo) => (
    photo.id === markerHoverPhotoId ?
      <ListItemHover key={photo.id}>
        <Image src={photo.image_url} />
        <ItemInfo>
          <ItemTitle>{photo.name}</ItemTitle>
          <span>{`Votes ${photo.votes_count}`}</span>
          <span>{`Rating ${photo.highest_rating}%`}</span>
        </ItemInfo>
      </ListItemHover>
      :
      <ListItem
        key={photo.id}
        onMouseOver={() => toggleHoverPhotoList(photo.id)}
        onMouseOut={() => toggleHoverPhotoList(0)}
      >
        <Image src={photo.image_url} />
        <ItemInfo>
          <ItemTitle>{photo.name}</ItemTitle>
          <span>{`Votes ${photo.votes_count}`}</span>
          <span>{`Rating ${photo.highest_rating}%`}</span>
        </ItemInfo>
      </ListItem>
  );

  return (
    <List>
      {
        photos.map((photo) => component(photo))
      }
    </List>
  );
};

PhotoList.propTypes = {
  photos: PropTypes.array,
  toggleHoverPhotoList: PropTypes.func.isRequired,
  markerHoverPhotoId: PropTypes.number
};

export default PhotoList;
