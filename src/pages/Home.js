import React from 'react';
import Bookshelf from '../Bookshelf';
import BookFilters from '../BookFilters';
import books from '../info/books.json';

export function Home() {
  return (
    <>
      <BookFilters/>
      <Bookshelf books={books}/>
    </>
  )
}

export default Home;