import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaInstagram, FaKaggle } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact py-5">
      <div className="container">
        <h2 className="display-4 mb-4">Contact Me</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a href="mailto:shreytripathi2004@gmail.com" className="contact-link">
                    <MdEmail className="contact-icon" /> shreytripathi2004@gmail.com
                  </a>
                </li>
                <li className="mb-3">
                  <a href="tel:+917905202121" className="contact-link">
                    <MdPhone className="contact-icon" /> +91 7905202121
                  </a>
                </li>
                <li className="mb-3">
                  <a 
                    href="https://www.linkedin.com/in/utkarsh-tripathi-0144001b2/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <FaLinkedin className="contact-icon" /> LinkedIn
                  </a>
                </li>
                <li className="mb-3">
                  <a 
                    href="https://github.com/Utkarsh-152" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <FaGithub className="contact-icon" /> GitHub
                  </a>
                </li>
                <li className="mb-3">
                  <a 
                    href="https://www.instagram.com/utkarsh_ds/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <FaInstagram className="contact-icon" /> Instagram
                  </a>
                </li>
                <li className="mb-3">
                  <a 
                    href="https://www.kaggle.com/utkarshtripathishrey" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <FaKaggle className="contact-icon" /> Kaggle
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <form className="contact-form">
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;