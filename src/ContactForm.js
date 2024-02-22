import React, { useState } from 'react';
import './ContactForm.css'; // Import CSS file for styling

function ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation for email and message
    if (!email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    // Send form data to server
    try {
      const response = await fetch('https://example.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        // If the request was successful
        alert('Form submitted successfully!');
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setEmail('');
          setName('');
          setMessage('');
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
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter Your Message"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        
        <button type="submit" className={`submit-button ${submitted ? 'submitting' : ''}`}>
          {submitted ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;