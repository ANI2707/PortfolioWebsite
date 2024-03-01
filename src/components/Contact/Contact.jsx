import React from "react";
import "./Contact.css";
import formAnimate from "../../assets/forms-animate.svg";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4l66qwn', 'template_5k073v1', form.current, {
        publicKey: 'I82bBPJs7uLhLd73v',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      form.current.reset();
  }
  
  return (
    <>
      <div className="main">
        <div className="content-left">
          <img src={formAnimate} alt="form image" className="contact-img" />
        </div>
        <div className="content-right">
          {/* form */}
          <div className="contact-form-header">Get in Touch</div>
          <div className="form-container">
            {/* form */}
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Message"
                  required
                />
              </div>

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
