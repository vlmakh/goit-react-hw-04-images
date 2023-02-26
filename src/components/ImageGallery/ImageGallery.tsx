import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImagesType } from 'components/types';

export default function ImageGallery({ images }: ImagesType) {
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
