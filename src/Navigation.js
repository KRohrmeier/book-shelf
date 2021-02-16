import React from 'react';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import logo from './images/logo.jpg';

import './navigation.css';

export function Navigation() {

  return (
      <Nav as='ul' className='navigation'>
      <Nav.Item as='li'>
        <Link to="/">
          <button id='logo-button'>
            <img 
              id='logo-id' 
              src={logo} 
              alt='Bookshelf home'
            />
          </button>
        </Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Link to="/add">Add</Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Link to="/lend">Lend</Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Link to="/return">Returned</Link>
      </Nav.Item>
    </Nav>
  )
}

export default Navigation;