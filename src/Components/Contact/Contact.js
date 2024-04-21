import React from 'react';
import './Contact.css';

export default function Contact () {
    const [contactInfo, setContactInfo] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [formResponseMessage, setFormResponseMessage] = React.useState('')


    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        
        // console.log('element which is being used', event.target)
        // console.log('input name', event.target.name);
        // console.log('input value', event.target.value);

        const newContactInfo = {
            ...contactInfo,
            [inputName]: inputValue
        }
        setContactInfo(newContactInfo)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(contactInfo.firstName.length <= 6 || contactInfo.password.length <= 6) {
            setFormResponseMessage('You are missing the password or email requirements')
        } else {
            setFormResponseMessage('Form submitted successfully')
        }
    }

    return (
        <div className='contact-form-container'>
            <h1 className='contact-form-title'>Contact us</h1>
            <form className='contact-form' onSubmit={handleSubmit}>
                 <input
                    className='contact-form-input' 
                    name='firstName' 
                    placeholder='first name' 
                    value={contactInfo.firstName} 
                    onChange={handleChange} 
                />
                <input
                    className='contact-form-input' 
                    name='lastName' 
                    placeholder='last name' 
                    value={contactInfo.lastName} 
                    onChange={handleChange} 
                />
                <textarea 
                    className='contact-form-textarea'
                    name='message' 
                    placeholder='write your message here' 
                    value={contactInfo.message} 
                    onChange={handleChange} 
                />
                <p>{formResponseMessage}</p>
                <button className='contact-form-submit-button' type="submit" >Submit</button>
            </form>
        </div>
    )
}