import React, { useEffect, useState } from 'react';

import Book from './Book/Book';

const Books = () => {
  const [books, setbooks] = useState(null);
  useEffect(() => {
    if (!books) {
      // getBooks();
      console.log("no books; we'd fetch 'em if we were set up");
    }
  }, [books]);

  // const getBooks = async () => {
  //   const freshBooks = await fetchBooks();
  //   console.log('got books = ', freshBooks);
  //   setbooks(freshBooks);
  // }

  return (
    <>
      <h2>Books</h2>
      <Book />
      <Book />
      <Book />
    </>
  )
};

export default Books;