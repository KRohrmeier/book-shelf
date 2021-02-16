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
