import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageItem from 'components/ImageItem/ImageItem';

function ImageGallery({ images }) {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <li key={image.id} className={css.item}>
          <ImageItem image={image} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array,
};
