import axios from 'axios';

const API_KEY = 'PjSeWyK8RW-ySGzY-tGOFNC8JKQBZv7Yccc_Xk2dGrg';
axios.defaults.baseURL = 'https://api.unsplash.com/v1';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);

  return data;
};
