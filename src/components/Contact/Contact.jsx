import React from "react";
import "./Contact.css";
import formAnimate from "../../assets/forms-animate.svg";
const Contact = () => {
  return (
    <>
      <div className="main">
        <div className="content-right">
          <img src={formAnimate} alt="form image" className="contact-img" />
        </div>
        <div className="content-left">
          {/* form */}
          
        </div>
      </div>
    </>
  );
};

export default Contact;
