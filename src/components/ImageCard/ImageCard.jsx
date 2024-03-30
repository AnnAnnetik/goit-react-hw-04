const ImageCard = ({ photo }) => {
  return (
    <div>
      <img
        width={250}
        height={250}
        src={photo.urls.small}
        alt={photo.alt_description}
      />
    </div>
  );
};

export default ImageCard;
