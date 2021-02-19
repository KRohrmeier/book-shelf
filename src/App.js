import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import Navigation from './Navigation';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import LendBook from './pages/LendBook';
import ReturnBook from './pages/ReturnBook';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  // function callAPI() {
  //   fetch('/testAPI')
  //       .then(res => res.text())
  //       .then(res => setApiResponse(res))
  // };
  // callAPI();

  function getBooks() {
    fetch('/getBooks')
        .then(res => res.json())
        .then(apiBooks => setBooks(apiBooks))
  }

  return (
    <Container fluid="md" className="App">
        <header className="App-header">
          <h1>
            Book S(h)elf
          </h1>
        </header>
      <div className='content'>
          <Navigation />
        <main>
          <ul className='api-intro'>{books.isbn}</ul>
          <Switch>
            <Route path="/add">
              <AddBook />
            </Route>
            <Route path="/lend">
              <LendBook />
            </Route>
            <Route path="/return">
              <ReturnBook />
            </Route>
            <Route path="/">
              <Home books={books} />
            </Route>
          </Switch>
        </main>
      </div>
    </Container>
  );
}

export default App;
