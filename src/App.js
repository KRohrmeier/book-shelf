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
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    getBookList();
  }, []);

  // function callAPI() {
  //   fetch('/testAPI')
  //       .then(res => res.text())
  //       .then(res => setApiResponse(res))
  // };
  // callAPI();

  function getBookList() {
    fetch('/getBookList')
        .then(res => res.json())
        .then(bookList => {
          console.log('app apiBooks.books = ', bookList.books);
          setBookList(bookList.books)
        })
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
          <Switch>
            <Route path="/add">
              <AddBook bookList={bookList} />
            </Route>
            <Route path="/lend">
              <LendBook />
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
