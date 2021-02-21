// for any actions on the /bookList endpoint

export function getBookList() {
  return fetch('http://localhost:3333/list')
      .then(data => data.json())
}

export function addBook(bookObject) {
  const today = new Date.now();
  const todayFormatted = (today.toISOString().slice(0, 10));
  console.log('today = ', todayFormatted);

  return fetch('http://localhost:3333/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({bookObject})
  })
      .then(data => data.json())
}