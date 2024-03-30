import './App.css';
import { SearchBar } from './components/SearchBar/SearchBar';
import { getPhotos } from './articles-api';
import Button from './components/Button/Button';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { useEffect, useState } from 'react';

function App() {
  const [query, setQuery] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [isError, setIsError] = useState(false);

  const hendleSearch = query => {
    setQuery(query);
    setPage(1);
    setPhotos([]);
  };

  useEffect(() => {
    if (!query) return;
    const fetchPhotos = async () => {
      try {
        setIsLoading(true);
        const response = await getPhotos(query, page);
        setPhotos(response.photos);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotos();
  }, [page, query]);

  const hendleClick = () => {
    setPage(pre => pre + 1);
  };

  return (
    <header>
      <SearchBar onSearch={hendleSearch} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ImageGallery photos={photos} />
      <Button onClick={hendleClick}>Load more</Button>
    </header>
  );
}

export default App;
