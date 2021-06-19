import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import LendBook from './pages/LendBook';
import ReturnBook from './pages/ReturnBook';
import { getBookList } from './services/bookList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [bookList, setBookList] = useState([]);

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
