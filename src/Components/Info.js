import React from 'react';

function Info() {
  return (
    <div className='info--container'>
        <img src={require('../headshot.jpg')} className='info--headshot' alt='headshot of the employee'></img>
        <h3 className='info--name'>Phillip LeClair</h3>
        <h4 className='info--title'>Frontend Developer</h4>
        <h5 className='info--title'>github.com/pjleclair</h5>
        <div className='info--button-container'>
            <button className='info--email-button'>Email</button>
            <button className='info--linkedin-button'>LinkedIn</button>
        </div>
    </div>
  );
}

export default Info;