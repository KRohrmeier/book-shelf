import React from 'react';
import { Col, Container, Row } from "react-bootstrap";

export function LendBook() {
  return(
    <Container>
      <Row>
        <Col xs={12}>
          <h1>Someone wants to borrow a book?</h1>
          <p>Sweet!</p>
        </Col>
      </Row>
    </Container>
  )
}

export default LendBook;