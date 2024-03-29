import { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal';
import { ImageType } from 'components/types';

type ImageProps = {
  image: ImageType;
};

export default function ImageGalleryItem({ image }: ImageProps) {
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
