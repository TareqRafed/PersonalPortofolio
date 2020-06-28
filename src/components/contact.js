import React from 'react';
import '../css/contact.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { useRef } from 'react';

function Contact(props) {
    const contactRef = useRef();
    return <div ref={contactRef} className="contact">
        <div className="container">
        <ScrollAnimation animateIn='fadeIn'>
        
            <div className="d-lg-none text-white">
                <h3>
                    Want to work with me?
                </h3>
                <p>
                    Get in touch. Send a general message or details of a project you'd like me to be a part of and I'll get back to you as soon as possible.
                </p>
            </div>
            <div className="contact-me-form">
                <form>
                    <div className="input">
                        <input placeholder="Name:" type="text">
                        </input>
                    </div>
                    <div className="input">
                        <input placeholder="E-mail:" type="text">
                        </input>
                    </div>
                    <div className="input">
                        <input placeholder="Subject:" type="text">
                        </input>
                    </div>
                    <div className="input">
                        <textarea placeholder="Get in touch!">
                        </textarea>
                    </div>
                </form>
                <button type="button">Submit!</button>
                <div className="contact-text">
                    <h3>
                        Want to work with me?
                </h3>
                    <p>
                        Get in touch. Send a general message or details of a project you'd like me to be a part of and I'll get back to you as soon as possible.
                </p>
                </div>
            </div>
            </ScrollAnimation>
        </div>
    </div>
}

export default Contact;