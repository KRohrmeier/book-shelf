import React from 'react';
import Bookshelf from '../Bookshelf';
import BookFilters from '../BookFilters';

export function Home(props) {
  const { books = {}} = props;

  console.log('Home; props:books = ', books);
  return (
    <>
      <BookFilters/>
      <Bookshelf books={books}/>
    </>
  )
}

export default Home;