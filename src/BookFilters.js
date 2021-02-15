import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';

import './bookfilters.css';

export function BookFilters() {
  
  return (
      <Row className='filter-list'>
        <DropdownButton id="dropdown-basic-button" title="Title">
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Author">
        </DropdownButton>
        <Button>Favorites</Button>
        <Button>On loan</Button>
      </Row>
  )
}

export default BookFilters;