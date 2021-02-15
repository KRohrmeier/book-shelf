import Container from 'react-bootstrap/Container';
import Navigation from './Navigation';
import Bookshelf from './Bookshelf';
import BookFilters from './BookFilters';
import books from './info/books.json';
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
          <Navigation/>
        <main>
          <BookFilters/>
          <Bookshelf books={books}/>
        </main>
      </div>
    </Container>
  );
}

export default App;
