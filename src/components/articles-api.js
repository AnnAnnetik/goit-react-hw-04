// import axios from 'axios';

// axios.defaults.baseURL = 'https://api.unsplash.com/photos/';
// axios.defaults.headers.common['Authorization'] =
//   'Client-ID PjSeWyK8RW-ySGzY-tGOFNC8JKQBZv7Yccc_Xk2dGrg';
// axios.defaults.headers.common['Accept-Version'] = 'v1';
// axios.defaults.params = {
//   orientation: 'landscape',
//   per_page: 15,
// };

// export const getPhotos = async (query, page) => {
//   const { data } = await axios.get(`?query=${query}&page=${page}`);
//   return data;
// };
import axios from 'axios';

const API_KEY = 'PjSeWyK8RW-ySGzY-tGOFNC8JKQBZv7Yccc_Xk2dGrg';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;

export const getPhotos = async (query, page = 1, per_page = 15) => {
  const { data } = await axios.get('search/photos', {
    params: {
      query,
      page,
      per_page,
    },
  });

  return data;
};
