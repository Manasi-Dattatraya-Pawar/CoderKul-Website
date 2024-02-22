import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'; // Import CSS file for CPlusPlus component styling

function CPlusPlus() {
  return (
    <div className="course-container">
      <div className="course-card">
        <h2>C++ Course</h2>
        <p>
          C++ is a cross-platform, object-oriented programming language that developers use to code high-performance operating systems, graphical user interfaces, and applications. C++ was created in 1983 by Bjarne Stroustrup as an extension to the modern C programming language known as "standard C." C++ or in collaboration with C#, Java, Python, and various other programming languages. Programmers may find learning C++ helpful because it's a portable language with a clear structure and reusable code. It is also an intermediate language, meaning it's relatively easy to understand and apply.
        </p>
        <h3 id="course-outline">Course Outline</h3>
        <ul>
          <li>Introduction to C++</li>
          <li>C++ Syntax</li>
          <li>C++ Functions</li>
          <li>C++ Programming Fundamentals</li>
          <li>Advanced C++ Concepts</li>
        </ul>
        <p>
          By the end of this course, you'll be able to write and run C++ programs, understand the basics of object-oriented programming, and have a solid foundation in C++ programming.
        </p>
        {/* Add buttons or links here if needed */}
        <Link to="/buynow">Buy Now</Link>
      </div>
    </div>
  );
}

export default CPlusPlus;
