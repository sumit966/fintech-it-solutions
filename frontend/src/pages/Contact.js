import React from "react";

function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>

      <p><b>Phone:</b> 6299863493</p>
      <p><b>Email:</b> info.sr0909@gmail.com</p>
      <p><b>Address:</b> Noida Sector 68, Block A (near QA Infotech)</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message"></textarea>
        <button className="btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
