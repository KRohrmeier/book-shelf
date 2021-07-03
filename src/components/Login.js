import React, { useState, useEffect } from 'react';

export const Login = ({ authorized }) => {

  return (
    <ul>
      <li>
        <button>Login</button>
      </li>
      <li>
        <button>Sign Up</button>
      </li>
    </ul>
  );
}

export default Login;