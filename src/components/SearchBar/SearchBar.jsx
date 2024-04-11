import { useState } from 'react';
import style from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { CiSearch } from 'react-icons/ci';

const notify = () => toast('Search images and photos ❗');

const SearchBar = ({ addImg }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    addImg(value);
    setValue('');
  };

  const handleOnChange = event => {
    setValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (!value) {
      notify();
    }
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          className={style.input}
          onChange={handleOnChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          value={value}
        />
        <button
          onClick={handleButtonClick}
          className={style.button}
          type="submit"
        >
          <CiSearch />
        </button>
        <Toaster
          toastOptions={{
            style: {
              background: 'red',
            },
          }}
        />
      </form>
    </header>
  );
};

export default SearchBar;
