import React from 'react';
import { Col, Row } from "react-bootstrap";

import happy_book_squint from '../images/happy_book_squint.svg';
import happy_book_laugh from '../images/happy_book_laugh.svg';
import kiss_book from '../images/kiss_book.svg';
import naughty_book from '../images/naughty_book.svg';

export const CuteBooksInARow = () => {
  return (
    <Row className='book-icon-container'>
      <Col xs={3} sm={2}>
        <div className='svg-background-1'>
          <img className='book-emoticon' src={happy_book_squint} alt='smiling book' />
        </div>
      </Col>
      <Col xs={3} sm={2}>
        <div className='svg-background-2'>
          <img className='book-emoticon' src={happy_book_laugh} alt='laughing book' />
        </div>
      </Col>
      <Col xs={3} sm={2}>
        <div className='svg-background-3'>
          <img className='book-emoticon' id='kiss_book' src={kiss_book} alt='kissing book' />
        </div>
      </Col>
      <Col xs={3} sm={2}>
        <div className='svg-background-4'>
          <img className='book-emoticon' src={naughty_book} alt='naughty book' />
        </div>
      </Col>
    </Row>
  );
}
export default CuteBooksInARow;