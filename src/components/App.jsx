import './App.css';
import { useState, useEffect } from 'react';
import { getPhotos } from './articles-api';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from '../components/SearchBar/SearchBar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import ImageModal from './ImageModal/ImageModal';
import Loader from '../components/Loader/Loader';
import LoadMoreBtn from '../components/Button/LoadMoreBtn';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({
    src: '',
    description: '',
  });

  useEffect(() => {
    if (!query) return;

    const fetchPhotos = async () => {
      try {
        setIsLoading(true);
        const data = await getPhotos(query, page);
        setTotalPages(data.total_pages);

        if (data.results.length > 0) setPhotos(p => [...p, ...data.results]);
        else toast.error('There are no results with such search!');
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotos();
  }, [page, query]);

  const handleQuery = resQuery => {
    setQuery(resQuery);
    setPage(1);
    setError(null);
    setPhotos([]);
    setTotalPages(0);
  };

  const handleLoadMore = () => {
    setPage(p => p + 1);
  };

  const handleModal = (state, photo = {}) => {
    setIsModalOpen(state);
    if (state) setSelectedPhoto(photo);
  };

  return (
    <>
      <SearchBar onSubmit={handleQuery} isLoading={isLoading} />
      <div className="container">
        {photos.length > 0 && !error && (
          <ImageGallery photos={photos} onSelect={handleModal} />
        )}
        {totalPages > page && !isLoading && !error && (
          <LoadMoreBtn onClick={handleLoadMore}>Load More</LoadMoreBtn>
        )}
        {error && <ErrorMessage />}
        {isLoading && !error && <Loader />}
      </div>
      <ImageModal
        isOpen={isModalOpen}
        photo={selectedPhoto}
        onChange={handleModal}
      />
      <Toaster
        toastOptions={{
          success: { style: { background: 'green' } },
          error: { style: { background: 'pink' } },
        }}
      />
    </>
  );
};

export default App;
