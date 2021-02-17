import React, { useState } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

import books from '../info/books.json';
import './book.css';

export function LendBook() {
  const [title, setTitle] = useState('');
  const [searchTitle, setSearchTitle] = useState('');
  const [found, setFound] = useState(false)
  const [validated, setValidated] = useState(false)

  // TODO: when title found, check that it's in & not already checked-out
  function checkForTitle() {
    const bookTitles = books.map(book => book.title);
    bookTitles.forEach(bookTitle => {
      if (bookTitle.toLowerCase().includes(searchTitle.toLowerCase())) {
      setTitle(bookTitle);
      setFound(true);
      };
    });
  }

  function handleChange(e) {
    setSearchTitle(e.target.value);
  }

  function handleFocus() {
    if (validated) {
      setValidated(false);
    }
    if (found) {
      setFound(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    checkForTitle();
  }

  function handleFoundClick(e) {
    setTitle(e.target.value);
    setFound(false);
    setSearchTitle('');

  }

  // TODO: make a "no" button which then removes that title from searches

  return (
    <Container className='lend-book book'>
      <Row>
        <Col xs={12}>
          <h1>Someone wants to borrow a book?</h1>
          <p>Sweet!</p>
        </Col>
      </Row>
      <Form validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId='formTitle'>
              <Form.Label>Book you're loaning</Form.Label>
              <Form.Control 
                  size='lg'
                  type='text'
                  value={searchTitle}
                  onChange={e => handleChange(e)}
                  onFocus={handleFocus}
              />
              <Form.Control.Feedback />
            </Form.Group>
            {/* <p>or</p>
            <Form.Group controlId='formISBN'>
              <Form.Label>ISBN</Form.Label>
              <Form.Control 
                  size='lg' 
                  type='text'
                  onChange={(e) => setISBN(e.target.value)}
              />
            </Form.Group> */}
            <Button type='submit'>Search for book</Button>
          </Form>
          <Form.Group className={found ? 'found' : 'hidden'}>
            <p>We found "{title}", which includes {searchTitle}</p>
            <Form.Label>Yes, </Form.Label>
            <Button className={found ? 'found' : 'hidden'} onClick={(e) => handleFoundClick(e)}>{title}</Button>
          </Form.Group>

    </Container>
  )
}

export default LendBook;