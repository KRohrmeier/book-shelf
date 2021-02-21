import React, { Component } from 'react';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.setBookList = this.setBookList.bind(this);
  }

  state = {
    bookList: []
  }

  componentDidMount() {
    this.setBookList()
  }

  setBookList() {
    console.log('App: setBookList called');
    getBookList()
    .then(items => {
      this.setState({
        bookList: items
      });
    })
  }

  render() {
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
                <AddBook bookList={this.state.bookList} setBookList={this.setBookList} />
              </Route>
              <Route path="/lend">
                <LendBook />
              </Route>
              <Route path="/return">
                <ReturnBook />
              </Route>
              <Route path="/">
                <Home bookList={this.state.bookList} />
              </Route>
            </Switch>
          </main>
        </div>
      </Container>
    );
  }
}

export default App;
