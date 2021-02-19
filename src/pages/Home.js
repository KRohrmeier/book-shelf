import React from 'react';
import Bookshelf from '../Bookshelf';
import BookFilters from '../BookFilters';

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