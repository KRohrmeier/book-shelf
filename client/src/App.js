import React, { useState, useEffect } from 'react';

import NewBookkeeperForm from './NewBookkeeperForm';
import bookkeeperService from './services/bookkeeperService';
import logo from './logo.svg';
import './App.css';

const App = () => {
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

  const renderFriends = (friends) => {
    return friends.map((friend) => 
    // TODO: make a get call for the id that's in the friend array & return that below
    <li key={`${friend}-friend`}>{friend}</li>
  ) };

  const renderBookkeeper = (bookkeeper) => {
    console.log('in renderBookkeeper = ', bookkeeper);
    return (
      <div className='bookkeeper-div'>
        <h3>{bookkeeper.nickName}</h3>
        <ul>
          <li key={`${bookkeeper._id}-givenname`}>{bookkeeper.givenName}</li>
          <li key={`${bookkeeper._id}-email`}>{bookkeeper.email}</li>
          {bookkeeper.friends
            ? <div>
                <h4>friends with the bookish:</h4>
                {renderFriends(bookkeeper.friends)}
              </div>
            : null
          }
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
      
      <NewBookkeeperForm />

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
