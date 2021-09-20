import React, { useEffect, useState } from 'react';
import { fetchBookkeepers } from '../api';

const BookkeeperList = () => {
  const [bookkeepers, setbookkeepers] = useState([]);

  useEffect(() => {
    const callBookkeepers = async () => {
      const result = await fetchBookkeepers();
      setbookkeepers(result.data);
    };
    callBookkeepers();
  }, []);

  return (
    <>
      <h2>Bookherders</h2>
      <ul className='bookkeeper-list'>
        { bookkeepers.map(bookherder => <li key={`${bookherder.email}-list`}>{bookherder.nickName}</li>)}
      </ul>
    </>
  );
}

export default BookkeeperList;