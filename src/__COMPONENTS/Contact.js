import React from 'react'
import '../__STATIC/Contact.css'
import '../__STATIC/RESPONSIVE/Contact.css'
import ask from '../image/Ask.png'
import $ from "jquery"
function Contact() {

    return (
        <div>
    <div className='form-box'>
        <div className='contact-form-photo'>
            <div>
                <h1>Ask Me Anything</h1>
            </div>
            <img src={ask} />
        </div>

        <div className='contact-form-inputs'>
            <form className='form'>
            <h1>Contact Me</h1>
            <label style={{color:"white" , paddingLeft:"10px"}}>Name </label>
            <input type="text"/>
            <label style={{color:"white" , paddingLeft:"10px"}}>Email </label>
            <input type="email"/>
            <label style={{color:"white" , paddingLeft:"10px"}}>Query </label>
            <textarea></textarea>
            <button>Send</button>
            </form>
        </div>

    </div>
        </div>
    )
}

export default Contact
