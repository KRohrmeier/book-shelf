import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import BookFilters from './BookFilters';
import heartBook from '../images/heart_book.svg';
import './bookshelf.css';

export function Bookshelf(props) {
  const bookList = props.bookList;
  const filteredBookList = bookList.filter(book => book.onLoan);
  console.log('Bookshelf props:bookList = ', bookList);
  console.log('Bookshelf filtered bookList = ', filteredBookList);

  return (
    <div className='bookshelf-container'>
      <BookFilters/>
      <Row className='booktitle-row'>
        <Col xs={12}>
          <h1>My Library</h1>
          <span id='book-count'>[{bookList.length} books]</span>
        </Col>
      </Row>
        {bookList.map((book) => {
          return (
            <Row key={`${book.isbn}-row`} className='bookshelf-row'>
              <Col key={`${book.isbn}-favorite`} sm={1} className='favorite-col col'>
                {book.favorite 
                    ? <div className='favorite-book-icon'>
                        <img id='favorite-book-id' src={heartBook} alt="favorite book"/>
                      </div> 
                    : <div className='non-favorite-book'></div>
                }
              </Col>
              <Col key={`${book.isbn}-title`} sm={6} className='title-col col'>{book.title}</Col>
              <Col key={`${book.isbn}-author`} sm={5} className='author-col col'>by {book.authors}</Col>
            </Row>
          )
        })}
    </div>
  )
}

export default Bookshelf;