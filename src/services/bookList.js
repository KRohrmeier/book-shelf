// for any actions on the /bookList endpoint

export function getBookList() {
  return fetch('http://localhost:3333/list')
    .then(response => response.json())
}

export function addBook(bookObject) {
  console.log('add book: passed in book = ', bookObject);
  return fetch('http://localhost:3333/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookObject)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      } else response.json();
    })
    .catch(error => console.log('ERROR: ', error));
}
