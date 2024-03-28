import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

import { Hearts } from 'react-loader-spinner';
import { getPhotos } from './articles-api';
import { Button } from './components/Button/Button';

function App() {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState('');

  const hendleSearch = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };
  const hendleClick = () => {
    setPage(pre => pre + 1);
  };
  useEffect(() => {
    if (!query) return;
    const fetchPhotos = async () => {
      try {
        setIsLoading(true);
        const response = await getPhotos(query, page);
        setImages(pre => [...pre, ...response.images]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotos();
  }, [page, query]);

  return (
    <header>
      <SearchBar hendleSearch={hendleSearch} />
      {isLoading && (
        <div>
          (
          <Hearts
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          )
        </div>
      )}
      {isError && <p>Помилка</p>}
      <ul>
        {Array.isArray(images) &&
          images.map(image => (
            <li key={image.id}>
              <img width={250} height={250} src={image.urls.small} alt="" />
              <h2>{image.user.name}</h2>
              <p>Likes: {image.likes}</p>
              <p>Total Likes: {image.user.total_likes}</p>
              <p>Total Photos: {image.user.total_photos}</p>
            </li>
          ))}
      </ul>{' '}
      <Button onClick={hendleClick}>Load more</Button>
    </header>
  );
}

export default App;
