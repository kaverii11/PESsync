import React, { useRef } from 'react';
import './AuthButton.css';

const AuthButton = ({ type, text, onClick }) => {
  const buttonRef = useRef(null); // Reference to the button

  // Example function that triggers when the button is clicked
  const handleClick = () => {
    console.log('Button clicked!');
    if (buttonRef.current) {
      buttonRef.current.focus();  // Focus on the button when clicked
    }
    if (onClick) onClick();  // Call the onClick passed as a prop
  };

  return (
    <button 
      ref={buttonRef} 
      className={`auth-button ${type}`} 
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default AuthButton;
