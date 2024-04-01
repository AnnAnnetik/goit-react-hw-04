import css from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const query = value.trim();
    if (!query.length) {
      toast.error('Please, search images and photos');
    }

    onSubmit(query);
  };

  const handleChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <header className={css.search}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
        <button className={css.searchBtn} type="submit">
          <FiSearch size="16px" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
