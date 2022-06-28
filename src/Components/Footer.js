import React from 'react';

function Footer() {
  return (
    <div className='footer--container'>
      <img className='footer--icon' src={require('../Twitter Icon.png')}></img>
      <img className='footer--icon' src={require('../Facebook Icon.png')}></img>
      <img className='footer--icon' src={require('../Instagram Icon.png')}></img>
      <img className='footer--icon' src={require('../GitHub Icon.png')}></img>
    </div>
  );
}

export default Footer;