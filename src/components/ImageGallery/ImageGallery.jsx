import ImageCard from '../ImageCard/ImageCard';
import style from './ImageGallery.module.css';
export const ImageGallery = ({ photos, onSelect }) => {
  return (
    <ul className={style.list}>
      {Array.isArray(photos) &&
        photos.map(photo => (
          <li className={style.item} key={photo.id}>
            <ImageCard photo={photo} onSelect={onSelect} />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;
