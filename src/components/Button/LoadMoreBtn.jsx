import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ children, onClick, disabled }) => {
  return (
    <button className={css.loadBtn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default LoadMoreBtn;
