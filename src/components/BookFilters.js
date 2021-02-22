import React from "react";
import Row from 'react-bootstrap/Row';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';

import './bookfilters.css';

export function BookFilters() {
  function handleClick(filterButton) {
    console.log('** filter button pressed = ', filterButton);
  }
  return (
      <Row className='filter-list'>
        <DropdownButton
            title="Title"
            className="filter-button"
          >
        </DropdownButton>
        <DropdownButton
            title="Author"
            className="filter-button"
          >
        </DropdownButton>
        <Button
            id='favorites'
            className="filter-button"
            onClick={e => handleClick(e.target.id)}
        >
          Favorites
        </Button>
        <Button
            id='onLoan'
            className="filter-button"
            onClick={e => handleClick(e.target.id)}
        >
          On loan
        </Button>
      </Row>
  )
}

export default BookFilters;