import React from 'react';
import '../css/contact.css';

function Contact(props) {
    return <div className="contact">
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
            <div>
                <h3 className="">
                    Want to work with me?
                </h3>
            </div>
        </div>
        <div className="footer">

        </div>
    </div>
}

export default Contact;