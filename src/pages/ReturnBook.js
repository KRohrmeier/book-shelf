import { Col, Container, Row } from "react-bootstrap";


export function ReturnBook() {
  return(
    <Container>
      <Row>
        <Col xs={12}>
          <h1>Someone returned a book to your library?</h1>
          <p>Nice!</p>
        </Col>
      </Row>
    </Container>
  )
}

export default ReturnBook;