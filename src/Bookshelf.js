import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import './bookshelf.css';

export function Bookshelf(props) {
  const [books, setBooks] = useState([props.books]);
  console.log('Bookshelf useState:books = ', books);

  return (
    <div className='bookshelf-container'>
      <Row className='booktitle-row'>
        <Col xs={12}>
          <h1>My Library</h1>
          <span id='book-count'>[{books.length} books]</span>
        </Col>
      </Row>
        {books.map((book) => {
          return (
            <Row key={book.isbn} className='bookshelf-row'>
              <Col sm={6} className='title-col col'>{book.title}</Col>
              <Col sm={6} className='author-col col'>by {book.authors}</Col>
            </Row>
          )
        })}
    </div>
  )
}

export default Bookshelf;