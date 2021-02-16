import React from 'react';
import { Col, Container, Row } from "react-bootstrap";

export function AddBook() {
  return(
    <Container>
      <Row>
        <Col xs={12}>
          <h1>A new book in your library?</h1>
          <p>Excellent!</p>
        </Col>
      </Row>
    </Container>
  )
}

export default AddBook;