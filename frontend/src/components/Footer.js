import React, { useRef } from 'react';
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null);  // Reference to the footer element

  // Example of interacting with the footer element using ref
  const handleFooterClick = () => {
    if (footerRef.current) {
      console.log('Footer clicked!');
      footerRef.current.style.backgroundColor = 'lightgray'; // Change background color
    }
  };

  return (
    <footer ref={footerRef} className="footer" onClick={handleFooterClick}>
      <p>© 2024 PESync. All rights reserved.</p>
      <div className="footer-links">
        <a href="/">User Agreement</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Cookie Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
