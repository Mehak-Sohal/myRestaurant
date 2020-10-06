import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './Contact.css'

const Contact = () => {

    return (
     <div className="contact">
       <div className='contact-info'>
       <form>
         <input type='text' placeholder='FirstName' />
         <input type='text' placeholder='LastName' /> 
         <input type='number' placeholder='Telephone' />
         <input type='email' placeholder='Email' />
         <textarea placeholder='Type your message here...' />
       </form>

        <button className='submit'>Submit</button>
        </div>
     </div>
    )
}

export default Contact
