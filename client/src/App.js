import React, { useState, useEffect } from 'react';

import bookkeeperService from './services/bookkeeperService';
import logo from './logo.svg';
import './App.css';


function App() {
  const [bookkeepers, setbookkeepers] = useState(null);

  useEffect(() => {
    console.log('App useEffect * * *');
    if (!bookkeepers) {
      getBookkeepers();
    }
  }, [bookkeepers]);

  const getBookkeepers = async () => {
    let res = await bookkeeperService.getAll();
    console.log('App.js getBookkeeper res = ', res);
    setbookkeepers(res);

    /* //how to fetch without axios? this not work, "net::ERR_CONNECTION_REFUSED" and "TypeError: failed to fetch"
    console.log('in getBookkeeper');
    // const res = await bookkeeperService.getAll();
    fetch('http://localhost:5000/bookkeeper')
    .then((result) => {
      console.log('getBookkeeper has result');
      return result.json();
    })
    .then((data) => {
      console.log('getBookkeepers returned = ', data);
      setbookkeepers(data);
    })
    .catch((error) => console.error(error));
    */
  };

  const renderBookkeeper = (bookkeeper) => {
    console.log('in renderBookkeeper = ', bookkeeper);
    return (
      <div className='bookkeeper-div'>
        <h3>{bookkeeper.nickName}</h3>
        <ul>
          <li key={`${bookkeeper._id}-givenname`}>{bookkeeper.givenName}</li>
          <li key={`${bookkeeper._id}-email`}>{bookkeeper.email}</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Books(h)elf</h1>
      </header>
      
      <form method="post" action="/bookkeeper">
        <fieldset>
          <legend>Enter your Battlecorn army bookkeeper's information</legend>
          <label htmlFor='bookkeeper-name'>Given name: </label>
          <input id='bookkeeper-name' type="text" name="givenName" />
          <br />

          <label htmlFor='bookkeeper-name'>Family name: </label>
          <input id='bookkeeper-name' type="text" name="familyName" />
          <br />

          <label htmlFor='bookkeeper-name'>Nick name, the name you'd like us to call you: </label>
          <input id='bookkeeper-name' type="text" name="nickName" required />
          <br />

          <label htmlFor='bookkeeper-email'>Bookkeeper's email: </label>
          <input id='bookkeeper-email' type="text" name="email" required />
          <br />
          <label htmlFor='bookkeeper-phone'>Bookkeeper's phone: </label>
          <input id='bookkeeper-phone' type="text" name="phone" />
        </fieldset>
        <input type="submit" value="Add Bookkeeper" />
      </form>

      <h2>Bookkeepers</h2>
        {(bookkeepers && bookkeepers.length > 0) ? 
        (bookkeepers.map(bookkeeper => renderBookkeeper(bookkeeper))
        ) : (
          <p>No bookkeepers found...</p>
        )}
      </div>
  );
}

export default App;
