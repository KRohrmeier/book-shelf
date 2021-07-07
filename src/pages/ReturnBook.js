import React from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row, Button } from "react-bootstrap";

import CuteBooksInARow from '../components/CuteBooksInARow';

export function ReturnBook() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted form');
  }

  return(
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className='page-heading'>Someone returned a book?</h1>
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
          <Button type='submit'>Returned book</Button>
        </Form>
      </Row>
      <footer>
        <CuteBooksInARow/>
      </footer>
    </Container>
  )
}

export default ReturnBook;