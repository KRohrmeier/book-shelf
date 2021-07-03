import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';

import Login from './components/Login';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import LendBook from './pages/LendBook';
import ReturnBook from './pages/ReturnBook';
import { ReactComponent as Bookshelf } from './images/bookshelf.svg';
import { getBookList } from './services/bookList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = ({ authorized }) => {
  // const [loading, setLoading] = useState(false);
  const [bookList, setBookList] = useState([]);
  // const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    getBookList()
      .then((list) => {
        if (mounted) {
          setBookList(list);
        }
      })
      return () => mounted = false;
  }, []);

  const onSVGMouseOver = (animationID) => {
    const animateElement = document.getElementById(animationID);
    animateElement.beginElement();
  };

  return (
    <Container fluid="md" className="App">
      <header className="App-header">
        <Row>
          <Col>
            <Bookshelf onMouseOver={() => onSVGMouseOver('bookshelf')} />
          </Col>
          <Col>
            <h1>Book S(h)elf</h1>
          </Col>
        </Row>
      </header>
      <div className='content'>
        {
          authorized ? <Navigation /> : <Login />
        }
        <main>
          <Switch>
            <Route path="/add">
              <AddBook bookList={bookList} setBookList={setBookList} />
            </Route>
            <Route path="/lend">
              <LendBook bookList={bookList} />
            </Route>
            <Route path="/return">
              <ReturnBook />
            </Route>
            <Route path="/">
              <Home bookList={bookList} />
            </Route>
          </Switch>
        </main>
      </div>
    </Container>
  );
}

export default App;
