import React from 'react';
import './style.css';

const TextInput = () => {
  return ( 
    <div className="textInputContainer">
      <div className="textInputBeforeContainer">
        <input className="textInput" />
      </div>
      <img className="image-body" src={require('../../Assets/Images/gMic.png')} />
    </div>
  )
}

export default TextInput;