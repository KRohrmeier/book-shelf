import React from 'react';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import logo from '../images/bookstars-bookshelf.png';

import './navigation.css';

export function Navigation() {

  return (
      <Nav as='ul' className='navigation'>
      <Nav.Item as='li'>
        <Link to="/">
            Home
        </Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Link to="/add">Add a book</Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Link to="/lend">Lend a book</Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Link to="/return">Returned book</Link>
      </Nav.Item>
    </Nav>
  )
}

export default Navigation;