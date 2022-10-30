import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './ImageItem.module.css';
import Modal from 'components/Modal';

function ImageItem({ webformatURL, tags, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <img
        src={webformatURL}
        alt={tags}
        className={css.item__img}
        onClick={this.toggleModal}
      />
      {this.state.showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </>
  );
}

export default ImageItem;

ImageItem.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string,
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
};
