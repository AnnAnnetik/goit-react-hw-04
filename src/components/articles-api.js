import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] =
  'Client-ID PjSeWyK8RW-ySGzY-tGOFNC8JKQBZv7Yccc_Xk2dGrg';
axios.defaults.headers.common['Accept-Version'] = 'v1';
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(
    `/search/photos?query=${query}&page=${page}`
  );
  return data;
};
