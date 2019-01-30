import React from 'react';
import './style.css';

const Button = ({ children }, icon) => {

  return ( 
  <div className="button-container">
    {icon &&
      <a href="#" className="button">{children}</a>
    }
    {!icon && 
      <a href="#" className="button-icon"></a>
    }
  </div> );
}
 
export default Button;