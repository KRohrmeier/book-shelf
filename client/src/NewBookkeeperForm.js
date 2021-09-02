import React from 'react';

const NewBookkeeperForm = () => {
  return (
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
  );
};

export default NewBookkeeperForm;