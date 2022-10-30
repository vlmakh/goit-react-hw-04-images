import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './ImageItem.module.css';
import Modal from 'components/Modal';

function ImageItem({ image }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={css.item__img}
        onClick={toggleModal}
      />
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={image.largeImageURL} alt={image.tags} />
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
  }),
};
