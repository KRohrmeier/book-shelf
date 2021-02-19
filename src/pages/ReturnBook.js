import React from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row, Button } from "react-bootstrap";
// const {readFile} = require("fs").promises;

export function ReturnBook() {
  const fileToRead = './info/books.json';

  // function readBookFile() {
  //   readFile(fileToRead, "utf8")
  //       .then(text => console.log('The file contains: ', text))
  //       .catch(error => console.log('Error reading file. Did you supply a filename? ERROR: ', error));
  // }

  function handleSubmit(e) {
    e.preventDefault();
    // readBookFile();
    console.log('submitted form');
  }

  return(
    <Container>
      <Row>
        <Col xs={12}>
          <h1>Someone returned a book to your library?</h1>
          <p>Nice!</p>
        </Col>
      </Row>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formTitle'>
            <Form.Label>Title</Form.Label>
            {/* <Form.Control 
                size='lg'
                type='text'
                value={title}
                isValid={validated}
                onChange={e => handleChange(e)}
                onFocus={handleFocus}
            /> */}
            <Form.Control.Feedback />
          </Form.Group>
          <Button type='submit'>Enter new book</Button>
        </Form>
      </Row>
    </Container>
  )
}

export default ReturnBook;