import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import { createBookkeeper } from '../../api';

const BookkeeperForm = () => {
  const [bookkeeperForm, setBookkeeperForm] = useState({
    nickName: 'Reader',
    email: 'ireadandlendbooks@example.com',
    phone: '608-123-4567',
    password: 'some secret no one can guess'
  });

  const handleChange = ({ target }, field) => {
    const fieldValue = target.value;
    console.log('in handle change, e.target.value = ', fieldValue);
    console.log('in handle change, field = ', field);
    
    switch (field) {
      case 'nickName':
        setBookkeeperForm({...bookkeeperForm, nickName: fieldValue});
        break;
      case 'email':
        setBookkeeperForm({...bookkeeperForm, email: fieldValue});
        break;
      case 'phone':
        setBookkeeperForm({...bookkeeperForm, phone: fieldValue});
        break;
        case 'password':
          setBookkeeperForm({...bookkeeperForm, password: fieldValue});
          break;
      default:
        setBookkeeperForm({...bookkeeperForm});
        break;
    };
    console.log('bookkeeper form state = ', bookkeeperForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('in handleSubmit; state = ', bookkeeperForm);
    createBookkeeper(bookkeeperForm)
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Add a bookkeeper (bookherder, booktender)</h2>
      <Col>
        <Form.Group className="mb-3" controlId='formNickName'>
          <Form.Label>Name you'd like to be called (nickname, perhaps?)</Form.Label>
          <Form.Control
            type='text'
            value={bookkeeperForm.nickName}
            onChange={(e) => handleChange(e, 'nickName')}
          />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-3" controlId='formEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="text"
            value={bookkeeperForm.email} 
            onChange={(e) => handleChange(e, 'email')}
          />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-3" controlId='formPhone'>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            value={bookkeeperForm.phone}
            onChange={(e) => handleChange(e, 'phone')} 
          />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-3" controlId='formPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            value={bookkeeperForm.password}
            onChange={(e) => handleChange(e, 'password')} 
          />
        </Form.Group>
      </Col>
      <Col>
        <button 
          type='submit'
          onSubmit={handleSubmit}
        >
          Add this bookkeeper!
        </button>
      </Col>
      <Col>
        <Form.Text className="text-muted">
          Sharing is the best way to overcome our fears.
        </Form.Text>
      </Col>
      
    </Form>
  );
};

export default BookkeeperForm;