import css from './ImageGallery.module.css';
// import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <li key={image.id} className={css.item}>
          <img
            src={image.webformatURL}
            alt={image.tags}
            className={css.item__img}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
