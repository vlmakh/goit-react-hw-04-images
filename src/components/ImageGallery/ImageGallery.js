import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';

export default function ImageGallery({ images }) {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <li key={image.id} className={css.item}>
          <ImageGalleryItem image={image} />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
