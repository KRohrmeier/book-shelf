import React, { useState } from 'react';
import { Col, Container, Row, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

import { findBook } from '../services/findBook';
import { addBook } from '../services/bookList';
import './book.css';

export function AddBook(props) {

  // TODO: add an intermediary step that lists top 5? 10? matches so book lover
  // can select the title, edition, etc they want to add from the list Google Books
  // returns, rather than current implementation of automatically adding the first book
  // (that's just the easiest way to get things working; not an actual design choice)

  // TODO: add a check if title already exists & option to add anyway or cancel

  const { bookList = {}, setBookList } = props;
  const [inputTitle, setInputTitle] = useState('');
  const [returnedBook, setReturnedBook] = useState('');

  console.log('** bookList from props = ', bookList);
  console.log('** inputTitle = ', inputTitle);
  console.log('** returnedBook = ', returnedBook);

  function handleFocus() {
    if (Boolean(returnedBook)) {
      setReturnedBook('');
    };
  }

  function validateInput() {
    console.log('validate input');
    if (inputTitle && inputTitle.trim().length > 0) {
      return true;
    } else {
      return false;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('handle submit');

    if (validateInput(inputTitle.trim())) {
      console.log('handle submit - validated');
      findBook(inputTitle)
        .then(foundBook => {
          addBook(foundBook);
          setReturnedBook(foundBook);
          setInputTitle('');
          setBookList();
        })
        .catch(error => console.log('ERROR: ', error));
    }
  }

  return (
    <Container className='add-book book'>
      <Row>
        <Col xs={12}>
          <h1>A new book for your library?</h1>
          <p>Excellent!</p>
        </Col>
      </Row>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formTitle'>
              <Form.Label>Title</Form.Label>
              <Form.Control 
                  size='lg'
                  type='text'
                  value={inputTitle}
                  onChange={e => setInputTitle(e.target.value)}
                  onFocus={handleFocus}
              />
              <Form.Control.Feedback />
            </Form.Group>
            <Button type='submit'>Enter new book</Button>
          </Form>
          <div className={Boolean(returnedBook) ? 'success-message' : 'hidden'}>
            <p>Added <span className='underline'>{returnedBook.title}</span></p>
            <img src={returnedBook.thumbnail} alt='' />
            <p>You now have {bookList.length} titles in your library.</p>
          </div>
    </Container>
  )
}

export default AddBook;