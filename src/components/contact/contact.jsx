import React from 'react';
import './contact.css';

const Contact = () => 
{
  const emailAddress = "calebmasresha@gmail.com";
  const phoneNumber = "+13016558544";

  const handleEmailClick = () => {
    const emailLink = `mailto:${emailAddress}`;
    window.location.href = emailLink;
  };

  const handlePhoneClick = () => {
    const phoneLink = `tel:${phoneNumber}`;
    window.location.href = phoneLink;
  };
return(
  <div className="cta">
    <div className="cta-content">
      
      <h1>Contact</h1>
      <p>
        Email:{" "}
        <a href={`mailto:${emailAddress}`} onClick={handleEmailClick}>
        <h3>calebmasresha@gmail.com</h3>
        </a>
      </p>
      <p>
        Phone:{" "}
        <a href={`tel:${phoneNumber}`} onClick={handlePhoneClick}>
          <h1>3016558544</h1>
        </a>
      </p>
      
    </div>
    
  </div>
)

}; 



export default Contact;



