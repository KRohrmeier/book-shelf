const googleAPI = "https://www.googleapis.com/books/v1/volumes";

export function findBook(findTitle) {
  const queryParams = encodeURIComponent(findTitle);
  const searchURL = `${googleAPI}?q=${queryParams}`;
  console.log('find book; url = ', searchURL);
  let foundBook = {};

  return fetch(searchURL)
    .then(response => response.json())
    .then(data => {
      const authors = data.items[0].volumeInfo.authors;
      const genre = data.items[0].volumeInfo.categories;
      const id = data.items[0].volumeInfo.industryIdentifiers[0].identifier;
      const isbn = data.items[0].volumeInfo.industryIdentifiers[0].identifier;
      const pageCount = data.items[0].volumeInfo.pageCount;
      const title = data.items[0].volumeInfo.title;
      const onLoan = false;
      const favorite = false;
      const borrowers = [];
      foundBook = {authors, genre, id, isbn, pageCount, title, borrowers, favorite, onLoan};
      console.log('find book; returning foundBook = ', foundBook);
      return foundBook;
    })
    .catch(error => console.log('ERROR: ', error));
}
