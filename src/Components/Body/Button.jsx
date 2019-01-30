import React from 'react';
import './style.css';

const Button = ({ children }, icon) => {

  return ( 
  <div className="button-container-body">
    <button className="button-body">{children}</button>
  </div> );
}
 
export default Button;