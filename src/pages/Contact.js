import React from 'react';
import '../component/Contact.css';

function Contact(){
  return(
    <div className='contact'>
      <div className='title'>
        <span>Contact</span>
        <h2>Connect with me</h2>
      </div>
      <div className='input-field'>
        <input type='text' placeholder='Enter your email'/>
      <textarea rows={10} cols={50}/>
      </div>
      <button type="submit">Send</button>
    </div>
  )
}

export default Contact;