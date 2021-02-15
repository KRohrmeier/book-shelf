import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import './bookshelf.css';

export function Bookshelf(props) {
  const { books = [] } = props;

  return (
    <div className='bookshelf-container'>
      <Row>
        <Col xs={12}>
          <h1>Books on my Bookshelf</h1>
          <span id='book-count'>[{books.length} books]</span>
        </Col>
      </Row>
      <Row className='bookshelf-list'>
        {books.map((book) => {
          return (
            <Row key={book.isbn} className='bookshelf-row'>
              <Col sm={6} className='title-col col'>{book.title}</Col>
              <Col sm={6} className='author-col col'>by {book.author}</Col>
            </Row>
          )
        })}
      </Row>
    </div>
  )
}

export default Bookshelf;