import React from 'react';
import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/cards");
  }

  return (
      <div>
           <input
            type='input'
            placeholder='Please enter your name'/> 
            <br/>
            <button type="button" onClick={handleClick}>
             Submit</button>
      </div>
    
  );
}
export default HomeButton;
