import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

function CCourse() {
  return (
    <div className="course-container">
      <div className="course-card">
      <h2>C Course</h2>
      <p>
        C is a general-purpose programming language that is widely used for developing system software, embedded systems, and applications. C is a procedural language, which means that it follows a step-by-step approach to solve a problem. C is a powerful language that provides low-level access to memory and hardware, making it an ideal choice for developing operating systems, device drivers, and other system software.
      </p>
      <h3 id="course-outline">Course Outline</h3>
      <ul>
        <li>Introduction to C</li>
        <li>Data Types and Variables</li>
        <li>Control Structures</li>
        <li>Functions</li>
        <li>Arrays and Pointers</li>
        <li>Structures and Unions</li>
        <li>File I/O</li>
        <li>Dynamic Memory Allocation</li>
        <li>Advanced Topics</li>
      </ul>
      <p>
        By the end of this course, you'll be able to write and run C programs, understand the basics of procedural programming, and have a solid foundation in C programming.
      </p>
      <Link to="/buynow">Buy Now</Link>
    </div>
    </div>
  );
}

export default CCourse;