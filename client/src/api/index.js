import axios from 'axios';

// TODO: obvs we can't hardcode "localhost:5000" as the url
// we'll need to get and set according to environment (dev v prod)
const bookUrl = 'http://localhost:5000/books';
const bookkeeperUrl = 'http://localhost:5000/bookkeepers';

export const fetchBooks = () => axios.get(bookUrl);
export const createBook = (newBook) => axios.post(bookUrl, newBook); // this doesn't work as-is

export const fetchBookkeepers = () => axios(bookkeeperUrl);
export const createBookkeeper = (bookkeeperForm) => {
  const options = {
    url: bookkeeperUrl,
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: bookkeeperForm
  };
  axios(options)
    .then((response) => {
      console.log('response from bookkeeper form submission: ', response);
    })
    .catch((error) => console.log('error posting bookkeeper form: ', error));
};