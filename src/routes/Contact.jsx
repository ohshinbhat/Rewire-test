import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [email, setEmail] = useState('');

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k0a12xt', 'service_k0a12xt', form.current, 'JcvI52PxdS0Rf1H7f')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <div onClick={togglePopup}>Contact Us</div>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <div className='contact-head'>Contact Us</div>
                        <form onSubmit={sendEmail} className='form-container' ref={form}>
                            <div>
                                <label className='sub-head'>Your Name*</label>
                                <input
                                    className='input-box1'
                                    type="text"
                                    placeholder="Enter your name"
                                    name="from_name"
                                />
                            </div>
                            <div>
                                <label className='sub-head'>Message*</label>
                                <input
                                    className='input-box2'
                                    placeholder="Enter your message"
                                    type="text"
                                    name="message"
                                />
                            </div>
                            <div className='close-opt'>
                                <button type="submit" className='submit'>Submit</button>
                                <button onClick={togglePopup} className='close'>Close</button>
                            </div>


                        </form>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
