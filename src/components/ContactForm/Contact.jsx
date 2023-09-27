import React, { useRef } from "react";
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_89b1mxn', 'template_zm316jh', form.current, '6zhTPUdRftebapk1p')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("Message Sent");
              
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <section id="contactPage">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form to discuss any work opportunities.</span>
            <form ref={form} className="contactForm" onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name="user_name" />
                <input type="email" className="email" placeholder="Your Email" name="user_email"/>
                <textarea className="msg" name="message"  rows="5" placeholder="Your Message" ></textarea>
                <button type="submit" value='send' className="submitBtn">Submit</button>
            </form>
        </section>
    )
};


export default Contact;