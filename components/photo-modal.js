import Modal from 'react-modal'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash.get';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  color: #666666;
  padding-bottom: 9px;
  width: 90%;
`;

const Close = styled.img`
  position: absolute;
  width: 20px;
  top: 18px;
  right: 18px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  text-align: center;
  width: 90%;
`;

const Image = styled.img`
  max-width: 100%;
`;

const ImageInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #666666;
  font-size: 18px;
`;

const Info = styled.span`
  display: flex;
  justify-content: center;
  padding-top: 9px;
`;

const InfoBreak = styled.div`
  margin: 18px;
  width: 150px;
  height: 2px;
  background-color: #666666;
`;

const PhotoModal = ({ photo, isModalOpen, closeModal }) => {
  const images = get(photo, 'images') || [];
  const image = (images.find((image) => image.size === 4) || images[0]) || {};

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <Close src="/static/close.png" onClick={closeModal} />
      <ModalBody>
        <Header>
            {photo.name}
        </Header>
        <ImageContainer>
          <Image src={image.url} />
          <ImageInfo>
            <Info>{`Votes ${photo.votes_count}`}</Info>
            <Info>{`Rating ${photo.highest_rating}%`}</Info>
            <Info><InfoBreak /></Info>
            {photo.camera &&
              <Info>{`Camera: ${photo.camera}`}</Info>
            }
            {photo.lens &&
              <Info>{`Lens: ${photo.lens}`}</Info>
            }
            {photo.focal_length &&
              <Info>{`Focal Length: ${photo.focal_length}`}</Info>
            }
            {photo.iso &&
              <Info>{`ISO: ${photo.iso}`}</Info>
            }
            {photo.shutter_speed &&
              <Info>{`Shutter Speed: ${photo.shutter_speed}`}</Info>
            }
            {photo.aperture &&
              <Info>{`Aperture: ${photo.aperture}`}</Info>
            }
          </ImageInfo>
        </ImageContainer>
      </ModalBody>
    </Modal>
  );
};

export default PhotoModal;
