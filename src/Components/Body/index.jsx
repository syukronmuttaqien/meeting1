import React from 'react';
import Button from './Button';
import './style.css';
import TextInput from './TextInput';

const Body = () => {
  return ( 
    <div className="container-body">
      <img src={require('../../Assets/Images/gImages.png')}/>
      <TextInput />
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <Button>Google Search</Button>
        <Button>I'm Feeling Lucky</Button>
      </div>
    </div>
  )
}

export default Body;