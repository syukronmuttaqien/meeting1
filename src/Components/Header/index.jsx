import React from 'react';
import Button from './Button';
import './style.css';

const Header = () => {
  return ( 
    <div className="container">
      <Button>Gmail</Button>
      <Button>Images</Button>
      <Button>
        <img className="button-icon" src={require('../../Assets/Images/gMore.png')} />
      </Button>
      <Button>
        <img className="button-icon" src={require('../../Assets/Images/gNotif.png')} />
      </Button>
      <Button>
        <img className="button-icon" src={require('../../Assets/Images/gProfile.png')} />
      </Button>
    </div>
  )
}

export default Header;