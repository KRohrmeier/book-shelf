import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import './bookshelf.css';

export const Bookshelf = ({bookList, currentFilter}) => {
  console.log('** * ** Bookshelf, props.bookList = ', bookList);
  // const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookListToShow, setBookListToShow] = useState([]);
  console.log('** * ** Bookshelf, bookListToShow = ', bookListToShow);
  // const [currentFilter, setCurrentFilter] = useState('all');
  
  // useEffect(() => {
  //   let mounted = true;
  //   if (mounted) {
  //     setCurrentFilter();
  //   };
  //   return () => mounted = false;
  // }, []);

  useEffect(() => {
    let mounted = true;
    if(mounted) {
      setBookListToShow(bookList);
    };
    return () => {
      setLoading(false);
      mounted = false;
    }
  }, [bookList]);

  useEffect(() => {
  console.log('currentFilter = ', currentFilter);
    let mounted = true;
    if (mounted) {
      switch(currentFilter) {
        case 'favorites':
          const favoriteBookList = bookList.filter(book => book.favorite);
          setBookListToShow(favoriteBookList);
          console.log('currentFilter, favoriteBookList = ', favoriteBookList);
          break;
        case 'onLoan':
            const onLoanBookList = bookList.filter(book => book.onLoan);
            console.log('currentFilter, onLoanBookList = ', onLoanBookList);
            setBookListToShow(onLoanBookList);
            break;
        case 'all':
        default:
          setBookListToShow(bookList);
        }
      };
    return () => mounted = false;
  }, [currentFilter]);

  
  return (
    <div className='bookshelf-container'>
      <Row className='booktitle-row'>
        <Col xs={12}>
          <h1>My Library</h1>
          <span id='book-count'>[{bookList.length} books]</span>
        </Col>
      </Row>
      {loading
        ? <Row className='bookshelf-row'>
            <Col xs={12} className='loading-image'><p>Loading...</p></Col>
          </Row>
        : bookListToShow.map((book) => {
            return (
              <Row key={`${book.isbn}-row`} className='bookshelf-row'>
                <Col key={`${book.isbn}-favorite`} xs={1} className='favorite-col col'>
                  {book.favorite 
                      ? <div className='favorite-book-icon'>
                        </div> 
                      : <div className='non-favorite-book'></div>
                  }
                </Col>
                <Col key={`${book.isbn}-title`} xs={6} className='title-col col'>{book.title}</Col>
                <Col key={`${book.isbn}-author`} xs={5} className='author-col col'>by {book.authors}</Col>
              </Row>
            )
          })
      }
    </div>
  )
}

export default Bookshelf;