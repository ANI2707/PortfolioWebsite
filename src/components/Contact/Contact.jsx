import React from "react";
import "./Contact.css";
import formAnimate from "../../assets/forms-animate.svg";
const Contact = () => {
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
            <form>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Message"
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
