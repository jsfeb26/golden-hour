import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PhotoModal from './photo-modal';

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  align-items: center;
  cursor: pointer;
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
  cursor: pointer;
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

export default class Photo extends Component {
  static propTypes = {
    photo: PropTypes.shape({
      id: PropTypes.number,
      votes_count: PropTypes.number,
      highest_rating: PropTypes.number
    }),
    toggleHoverPhotoList: PropTypes.func.isRequired,
    markerHoverPhotoId: PropTypes.number
  }

  constructor(props) {
    super(props);

    this.state = { isModalOpen: false };
  }

  _openModal = () => {
    this.setState(() => ({ isModalOpen: true }));
  }

  _closeModal = () => {
    this.setState(() => ({ isModalOpen: false }));
  }

  render() {
    const { photo, markerHoverPhotoId, toggleHoverPhotoList } = this.props;

    if (photo.id === markerHoverPhotoId) {
      return (
        <ListItemHover key={photo.id} onClick={this._openModal}>
          <Image src={photo.image_url} />
          <ItemInfo>
            <ItemTitle>{photo.name}</ItemTitle>
            <span>{`Votes ${photo.votes_count}`}</span>
            <span>{`Rating ${photo.highest_rating}%`}</span>
          </ItemInfo>
          <PhotoModal
            photo={photo}
            isModalOpen={this.state.isModalOpen}
            closeModal={this._closeModal}
          />
        </ListItemHover>
      );
    }

    return (
      <ListItem
        key={photo.id}
        onMouseOver={() => toggleHoverPhotoList(photo.id)}
        onMouseOut={() => toggleHoverPhotoList(0)}
        onClick={this._openModal}
      >
        <Image src={photo.image_url} />
        <ItemInfo>
          <ItemTitle>{photo.name}</ItemTitle>
          <span>{`Votes ${photo.votes_count}`}</span>
          <span>{`Rating ${photo.highest_rating}%`}</span>
        </ItemInfo>
        <PhotoModal
          photo={photo}
          isModalOpen={this.state.isModalOpen}
          closeModal={this._closeModal}
        />
      </ListItem>
    );
  }
}
