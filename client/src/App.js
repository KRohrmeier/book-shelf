import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import BookkeeperList from './Components/BookkeeperList';
import BookkeeperForm from './Components/Form/BookkeeperForm';
import Books from './Components/Books/Books';
import './styles.css';
import logo from './images/colorful-logo.svg';

const App = () => {
  return (
    <Container className='mainApp'>
      <div className='app-header'>
        <img src={logo} alt='bookshelf logo' height='120' />
        <h1>Welcome to Books(h)elf</h1>
      </div>
      <main>
        <Row>
          <Col>
            <BookkeeperList />
          </Col>
        </Row>
        <Row>
          <Col md={7} className='books-col'>
            <Books />
          </Col>
          <Col md={5} className='form-col'>
            <BookkeeperForm />
          </Col>
        </Row>
      </main>
    </Container>
  );
}

export default App;