import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Address: 123 Main Street, Anytown, CA 12345</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li>Company Information</li>
              <li>Our Mission</li>
              <li>Our Team</li>
            </ul>
          </div>
          
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 AirBnb. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;