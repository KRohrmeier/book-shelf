import React, { useState } from 'react';
import { Col, Container, Row, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

import books from '../info/books.json';
import './add.css';

export function AddBook() {

  // use an onBlur event or make the enter title / ISBN be "look-up by title / ISBN" fields 
  // that you then submit when you found the title you want
  // the onBlur or look-up fields connect to api

  const [title, setTitle] = useState('');
  const [validated, setValidated] = useState(false);

  function createBookObject() {
    const today = new Date();
    const formattedDate = today.toISOString().slice(0,10);
    return (
      {
        "isbn": "0",
        "title": title,
        "author": "",
        "pages": "0",
        "onLoan": "false",
        "favorite": "false",
        "dateAdded": formattedDate,
        "genre": 
          []
      }
    )
  }

  function validateInput() {
    console.log('validate input; title from state = ', title);
    if (title && title.trim().length > 0) {
      setTitle(title.trim());
      setValidated(true);
      return true;
    } else {
      setValidated(false);
      return false;
    }
  }

  function addNewBook() {
    const newBook = createBookObject();
    books.push(newBook);
    console.log('added new book ** ** books: ', books);
    setTitle('');
    console.log('book title should now be blank: ', title);
  }

  function handleChange(e) {
    console.log('handle change, e.target.value = ', e.target.value);
    setTitle(e.target.value);
  }

  function handleFocus() {
    if (validated) {
      setValidated(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateInput()) {
      addNewBook();
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
          <Form validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId='formTitle'>
              <Form.Label>Title</Form.Label>
              <Form.Control 
                  size='lg'
                  type='text'
                  value={title}
                  isValid={validated}
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
            <Button type='submit'>Enter new book</Button>
          </Form>
          <p className={validated ? 'success-message' : 'hidden'}>
            {`Your new book's been added! You now have ${books.length} titles in your library.`}
          </p>
    </Container>
  )
}

export default AddBook;