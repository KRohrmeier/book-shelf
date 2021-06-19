import React, { useState } from 'react';
import Bookshelf from '../components/Bookshelf';
import BookFilters from '../components/BookFilters';

export function Home(props) {
  const { bookList = {} } = props;

  const [currentFilter, setCurrentFilter] = useState('all');

  return (
    <>
      <BookFilters setCurrentFilter={setCurrentFilter}/>
      <Bookshelf bookList={bookList} currentFilter={currentFilter}/>
    </>
  )
}

export default Home;