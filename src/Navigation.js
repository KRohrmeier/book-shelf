import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import logo from './images/logo.jpg';

import './navigation.css';

export function Navigation() {

  return (
      <Nav as='ul' className='navigation'>
      <Nav.Item as='li' href="#home">
        <button id='logo-button'>
          <img 
            id='logo-id' 
            src={logo} 
            alt='Bookshelf home'
          />
        </button>
      </Nav.Item>
      <Nav.Item as='li' href="#Add">
        <Nav.Link eventKey="add-link">Add</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li' href="#Lend">
        <Nav.Link eventKey="lend-link">Lend</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li' href="#Return">
        <Nav.Link eventKey="return-link">Returned</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Navigation;