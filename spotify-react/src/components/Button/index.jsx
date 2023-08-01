import React from 'react';
import './button.css';

const Button = ({ text = 'Login', onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
