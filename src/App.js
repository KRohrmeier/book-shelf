import React, { useState } from 'react';
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
  const [apiResponse, setApiResponse] = useState('');

  // function callAPI() {
  //   fetch('http:localhost:9000/testAPI')
  //       .then(res => res.text())
  //       .then(res => setApiResponse(res))
  // };
  // callAPI();

  function getBooks() {
    fetch('http:localhost:9000/getBooks')
        .then(response => response.text())
        .then(books => console.log(books))
  }
  getBooks();

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
          <p className='api-intro'>{apiResponse}</p>
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
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Container>
  );
}

export default App;
