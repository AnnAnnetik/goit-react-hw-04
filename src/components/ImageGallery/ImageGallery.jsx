import ImageCard from '../ImageCard/ImageCard';

export const ImageGallery = ({ photos }) => {
  return (
    <ul>
      {Array.isArray(photos) &&
        photos.map(photo => (
          <li key={photo.id}>
            <ImageCard photo={photo} />
          </li>
        ))}
    </ul>
  );
};
