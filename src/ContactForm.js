import React, { useState } from 'react';
import './ContactForm.css'; // Import CSS file for styling
// import './server'; // Import server.js file to mock server
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation for email and password
    if (!email.includes('@') || password.length < 6) {
      alert('Please enter a valid email and password (password should be at least 6 characters long)');
      return;
    }

    // Send form data to server
    try {
      const response = await fetch('https://example.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });

      if (response.ok) {
        // If the request was successful
        alert('Form submitted successfully!');
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setEmail('');
          setPassword('');
          setName('');
        }, 1500);
      } else {
        // If there was an error
        alert('Failed to submit form. Please try again later.');
      }
    } catch (error) {
      // If there was a network error
      alert('Network error. Please try again later.');
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
        </div>
        <div className="forgot-password">
          <a href="/">Forgot Password?</a>
        </div>
        <button type="submit" className={`submit-button ${submitted ? 'submitting' : ''}`}>
          {submitted ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
