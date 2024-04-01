import css from './ImageCard.module.css';

const ImageCard = ({ card, onSelect }) => {
  return (
    <div className={css.container}>
      <img
        className={css.img}
        src={card.urls.small}
        alt={card.alt_description}
        onClick={() =>
          onSelect(true, {
            src: card.urls.regular,
            description: card.alt_description,
          })
        }
      />
    </div>
  );
};

export default ImageCard;
