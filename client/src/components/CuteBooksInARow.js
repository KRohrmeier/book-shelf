import React from 'react';
import { Col, Row } from "react-bootstrap";

import happy_book_squint from '../images/happy_book_squint.svg';
import happy_book_laugh from '../images/happy_book_laugh.svg';
import { ReactComponent as KissingBook } from '../images/kiss_book.svg';
import naughty_book from '../images/naughty_book.svg';
import flower from '../images/flowerpot_2.svg';

export default function CuteBooksInARow() {

  const onSVGMouseOver = (animationID) => {
    // currently only works on "kiss" since the data (d) or shape of SVG 
    // can only be changed via SMIL or a library
    const animateElement = document.getElementById(animationID);
    animateElement.beginElement();
  }

  return (
    <Row className='justify-content-space-around'>
      <Col xs={2}>
        <div className='svg-background-1'>
          <img
            alt='smiling book'
            className='book-emoticon'
            id='smiling-book'
            src={happy_book_squint} 
          />
        </div>
      </Col>
      <Col xs={2}>
        <div className='svg-background-2'>
          <img
            alt='laughing book'
            className='book-emoticon'
            id='laughing-book'
            src={happy_book_laugh}
          />
        </div>
      </Col>
      <Col xs={2}>
        <div className='svg-background-3'>
          <KissingBook onMouseOver={() => onSVGMouseOver('kiss')} />
        </div>
      </Col>
      <Col xs={2}>
        <div className='svg-background-5'>
          <img
            alt='flowerpot'
            className='book-emoticon'
            id='flowerpot'
            src={flower}
          />
        </div>
      </Col>
      <Col xs={2}>
        <div className='svg-background-4'>
          <img
            alt='naughty book'
            className='book-emoticon'
            id='naughty_book'
            src={naughty_book}
          />
        </div>
      </Col>
    </Row>
  );
}
