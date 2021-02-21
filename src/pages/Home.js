import React from 'react';
import Bookshelf from '../components/Bookshelf';
import BookFilters from '../components/BookFilters';

export function Home(props) {
  const { bookList = {} } = props;
  console.log('Home; props:books = ', bookList);

  return (
    <>
      <BookFilters/>
      <Bookshelf bookList={bookList}/>
    </>
  )
}

export default Home;