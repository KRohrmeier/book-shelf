import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import logo from './images/logo.jpg';

import './navigation.css';

export function Navigation() {

  return (
      <Nav as='ul' className='navigation'>
      <Nav.Item as='li' href="#home">
        <img 
            id='logo-id' 
            src={logo} 
            alt='Bookshelf home'
        />
      </Nav.Item>
      <Nav.Item as='li' href="#Add">
        <Nav.Link eventKey="add-link">Add a book</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li' href="#Lend">
        <Nav.Link eventKey="lend-link">Lend a book</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li' href="#Return">
        <Nav.Link eventKey="return-link">Return a book</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Navigation;