// Java.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

function Java() {
  return (
    <div className="course-container">
      <div className="course-card">
      <h2>Java Course</h2>
      <p>
        In this course, you'll learn the fundamentals of Java programming, including syntax, data types, control structures, and object-oriented concepts.
      </p>
      
        <h3 id="course-outline">Course Outline</h3>
        <ul>
          <li>Introduction to Java</li>
          <li>Data Types and Variables</li>
          <li>Control Structures</li>
          <li>Objects and Classes</li>
          <li>Methods and Functions</li>
          <li>Arrays and Collections</li>
          <li>Exceptions and Error Handling</li>
          <li>File I/O</li>
          <li>Networking and Web Services</li>
          <li>Advanced Topics</li>
        </ul>
     
      <p>
        By the end of this course, you'll be able to write and run Java programs, understand the basics of object-oriented programming, and have a solid foundation in Java programming.
      </p>
      <Link to="/buynow">Buy Now</Link>
    </div>
    </div>
  );
}

export default Java;
