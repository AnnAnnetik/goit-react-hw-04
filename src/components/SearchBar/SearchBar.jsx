import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import style from './SearchBar.module.css';
import { FiSearch } from 'react-icons/fi';
function SearchBar({ onSubmit }) {
  const [value, setValue] = useState('');

  const hendleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
    setValue('');
    notify();
  };
  const notify = () => toast('Search images and photos');
  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <header className={style.header}>
      <form onSubmit={hendleSubmit} className={style.form}>
        <div className={style.input_сontainer}>
          <button className={style.button} type="submit">
            <FiSearch size="16px" />
          </button>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            value={value}
            className={style.input}
          />
        </div>
      </form>
      <Toaster />
    </header>
  );
}

export default SearchBar;
