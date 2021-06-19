import React from "react";
import Row from 'react-bootstrap/Row';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';

import './bookfilters.css';

export function BookFilters({ setCurrentFilter }) {
  function handleClick(filterButton) {
    console.log('** filter button pressed = ', filterButton);
    setCurrentFilter(filterButton);
  }
  return (
      <Row className='filter-list'>
        <Button
            id='all'
            className="filter-button"
            onClick={e => handleClick(e.target.id)}
        >
          All
        </Button>
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
      </Row>
  )
}

export default BookFilters;