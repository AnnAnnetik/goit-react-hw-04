const ImageCard = ({ photo, onSelect }) => {
  return (
    <div>
      <div>
        <img
          src={photo.urls.small}
          alt={photo.alt_description}
          onClick={() =>
            onSelect(true, {
              src: photo.urls.regular,
              description: photo.alt_description,
            })
          }
        />
      </div>
      <h2>{photo.user.name}</h2>
      <p>Likes: {photo.likes}</p>
      <p>Total Likes: {photo.user.total_likes}</p>
      <p>Total Photos: {photo.user.total_photos}</p>
    </div>
  );
};

export default ImageCard;
