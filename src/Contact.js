import React, { useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './Contact.css'

const Contact = () => {
   const [url, setUrl] = useState('mailto:mehak.sohal94@gmail.com.com?body=body');
   const [name, setName] = useState('');
   const [phone, setPhone] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   const handleClick = (e) => {
    e.preventDefault();
   window.open(`mailto:${email}?body=${name}: ${message}`);
 }

    return (
     <div className="contact">
       <div className='contact-info'>
       <form>
         <input value={name} type='text' placeholder='Name' onChange={e => setName(e.target.value)} /> 
         <input value={phone} type='number' placeholder='Telephone' onChange={e => setPhone(e.target.value)} />
         <input value={email} type='email' placeholder='Email' onChange={e=> setEmail(e.target.value)} />
         <textarea value={message} placeholder='Type your message here...' onChange={e => setMessage(e.target.value)} />
       </form>

        <button type='submit' onClick={handleClick} className='submit'>Submit</button>
        </div>
     </div>
    )
}

export default Contact
