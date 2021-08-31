import React, { useState } from 'react';
import Bookshelf from '../components/Bookshelf';
import BookFilters from '../components/BookFilters';
import CuteBooksInARow from '../components/CuteBooksInARow';

export function Home(props) {
  const { bookList = {} } = props;

  const [currentFilter, setCurrentFilter] = useState('all');

  return (
    <>
      <BookFilters setCurrentFilter={setCurrentFilter}/>
      <Bookshelf bookList={bookList} currentFilter={currentFilter}/>
      <footer>
        <CuteBooksInARow/>
      </footer>
    </>
  )
}

export default Home;