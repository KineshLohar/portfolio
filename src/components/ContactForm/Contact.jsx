import React, { useRef, useState } from "react";
import './contact.css';
import emailjs from '@emailjs/browser';
import Loader from "react-js-loader";

const Contact = () => {
    const serviceKey = process.env.REACT_APP_serviceToken;
    const templateKey = process.env.REACT_APP_templateToken;
    const secretKey = process.env.REACT_APP_secretKeyEmailJs;

    const form = useRef();
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [loader, setLoader] = useState(false);



    const sendEmail = (e) => {
        setLoader(true);
        e.preventDefault();
        
        // Validate name
        const nameRegex = /^[A-Za-z\s]+$/; 
        if (!form.current.user_name.value.trim() || !nameRegex.test(form.current.user_name.value.trim())) {
            setNameError("Valid name is required (no numbers allowed)");
            return;
        } else {
            setNameError("");
        }

        // Validate email
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!form.current.user_email.value.trim() || !emailRegex.test(form.current.user_email.value.trim())) {
            setEmailError("Valid email is required");
            return;
        } else {
            setEmailError("");
        }

        // Validate message
        if (!form.current.message.value.trim()) {
            setMessageError("Message is required");
            return;
        } else {
            setMessageError("");
        }

        emailjs.sendForm(serviceKey, templateKey, form.current, secretKey)
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              setLoader(false);
              alert("Message Sent");
              
          }, (error) => {
              console.log(error.text);
          });
    };

    return (
        <section id="contactPage">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form to discuss any work opportunities.</span>
            
            {
                (!loader) 
                ?
                <form ref={form} className="contactForm" onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="user_name" />
                    {nameError && <div className="error">{nameError}</div>}
                    <input type="email" className="email" placeholder="Your Email" name="user_email"/>
                    {emailError && <div className="error">{emailError}</div>}
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    {messageError && <div className="error">{messageError}</div>}
                    <button type="submit" value='send' className="submitBtn">Send</button>
                </form>
                :
                <Loader type="spinner-default" color={"#fff"} bgColor={"#fff"} title={"Sending message..."}  size={100} />
            }

           
        </section>
    )
};

export default Contact;
