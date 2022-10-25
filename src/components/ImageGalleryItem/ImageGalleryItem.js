import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li className={css.item}>
      <img src={src} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;
