import React, { useState } from 'react';
import { Col, Container, Row, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

import books from '../info/books.json';
import './book.css';

export function AddBook() {

  // TODO: use an onBlur event or make the 
  // enter title / ISBN be "look-up by title / ISBN" fields 
  // that you then submit when you found the title you want
  // the onBlur or look-up fields connect to api

  const [title, setTitle] = useState('');
  const [validated, setValidated] = useState(false);
  const [returnedTitle, setReturnedTitle] = useState('');

  const googleAPI = "https://www.googleapis.com/books/v1/volumes";

  function findBook() {
    const queryParams = encodeURIComponent(title);
    const searchURL = `${googleAPI}?q=${queryParams}`;
    console.log('api url = ', searchURL);
    fetch(searchURL)
        .then(response => response.json())
        .then(data => {
          const authors = data.items[0].volumeInfo.authors;
          const apiGenre = data.items[0].volumeInfo.categories;
          const apiIsbn = data.items[0].volumeInfo.industryIdentifiers[0].identifier;
          const apiPageCount = data.items[0].volumeInfo.pageCount;
          const apiTitle = data.items[0].volumeInfo.title;
          setReturnedTitle(apiTitle);
          addNewBook(createBookObject(authors, apiGenre, apiIsbn, apiPageCount, apiTitle));
        })
        .catch(error => console.error(`error : ${error}`));
  }

  function createBookObject( authors, genre, isbn, pageCount, title ) {
    const today = new Date();
    const formattedDate = today.toISOString().slice(0,10);
    return (
      {
        "authors": authors,
        "dateAdded": formattedDate,
        "favorite": "false",
        "genre": genre,
        "isbn": isbn,
        "onLoan": "false",
        "pageCount": pageCount,
        "title": title
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

  function addNewBook(newBook) {
    books.push(newBook);
    setTitle('');
  }

  function handleChange(e) {
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
      findBook();
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
            {`Added "${returnedTitle}"! You now have ${books.length} titles in your library.`}
          </p>
          <p id='content'></p>
    </Container>
  )
}

export default AddBook;