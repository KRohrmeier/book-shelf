// for any actions on the /bookList endpoint

export function getBookList() {
  return fetch('http://localhost:3333/list')
    .then(response => response.json());
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
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
        // return Promise.reject({ status: res.status, statusText: res.statusText });
      } else res.json();
    })
    .then(res => console.log('addBook res = ', res))
    .catch(err => console.error('addBook ERROR, with message: ', err.statusText));
}
