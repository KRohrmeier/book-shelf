import React, { useState, useEffect } from 'react';

import bookkeeperService from './services/bookkeeperService';
import logo from './logo.svg';
import './App.css';

function App() {
  const [bookkeepers, setbookkeepers] = useState([]);

  useEffect(() => {
    console.log('in useEffect * * *');
    if (!bookkeepers) {
      console.log('in !bookkeepers * * *');
      getBookkeepers();
    }
  }, [bookkeepers]);

  const getBookkeepers = async () => {
    let res = await bookkeeperService.getAll();
    console.log('App.js getBookkeeper res = ', res);
    setbookkeepers(res);
  };

  const renderBookkeeper = (bookkeeper) => {
    return (
      <ul>
        <li key={bookkeeper._id}>{bookkeeper.nickName}</li>
        <li>{bookkeeper.email}</li>
      </ul>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Books(h)elf</h1>
      </header>
      <h2>Bookkeepers</h2>
      <ul className='list'>
        {(bookkeepers && bookkeepers.length > 0) ? 
        (bookkeepers.map(bookkeeper => renderBookkeeper(bookkeeper))
        ) : (
          <li>No bookkeepers found... :(</li>
        )}
      </ul>
    </div>
  );
}

export default App;
