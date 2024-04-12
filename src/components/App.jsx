import './App.css';
import SearchBar from './SearchBar/SearchBar';
import { getPhotos } from './articles-api';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';

import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import ImageModal from './ImageModal/ImageModal';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [isError, setIsError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({
    src: '',
    description: '',
  });

  function handleModal(state, photo = {}) {
    setIsModalOpen(state);
    if (state) setSelectedPhoto(photo);
  }

  const handleSearch = query => {
    setQuery(query);
    setPage(1);
    setPhotos([]);
    setTotalPages(0);
  };

  useEffect(() => {
    if (!query) return;
    const fetchPhotos = async () => {
      try {
        setIsLoading(true);
        const response = await getPhotos(query, page);

        setPhotos(pre => [...pre, ...response.results]);
        setTotalPages(response.total_pages);
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
    <div>
      <SearchBar addImg={handleSearch} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ImageGallery photos={photos} onSelect={handleModal} />
      <ImageModal
        isOpen={isModalOpen}
        photo={selectedPhoto}
        onChange={handleModal}
      />
      {totalPages > page && <LoadMoreBtn onClick={hendleClick}>Load more</LoadMoreBtn>}
    </div>
  );
}

export default App;
