import Container from 'react-bootstrap/Container';
import Navigation from './Navigation';
import Bookshelf from './Bookshelf';
import BookFilters from './BookFilters';
import books from './info/books.json';
import './App.css';
import StupidCSS from './ihatecss';

function App() {
  console.log('books: ', books);
  return (
    <Container className="App">
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
        <StupidCSS/>
      </div>
    </Container>
  );
}

export default App;
