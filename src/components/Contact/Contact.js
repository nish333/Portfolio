import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contect">
      <h1>Contect</h1>
      <div className="contact__container">
        <p>
          Email : <span>nishanthsankar33@gmail.com</span>
        </p>
        <p>
          GitHub Username : <span>nish333</span>
        </p>
      </div>
    </Element>
  );
};

export default Contact;
