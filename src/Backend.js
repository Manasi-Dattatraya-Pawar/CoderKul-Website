import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

function BackendCourse() {
  return (
    <div className="course-container">
      <div className="course-card">
      <h2>Backend Development Course</h2>
      <p>
        This course covers the core fundamentals of backend development, including server-side programming, data storage, and handling user requests. You will learn how to create robust and scalable backend applications using various programming languages and frameworks.
      </p>
      <h3 id="course-outline">Course Outline</h3>
      <ul>
        <li>Introduction to Backend Development</li>
        <li>Server-side Programming with Node.js</li>
        <li>Database Management with MySQL and PostgreSQL</li>
        <li>Handling User Requests with Express.js</li>
        <li>Authentication and Authorization</li>
        <li>API Design and Implementation</li>
        <li>Scaling and Deployment</li>
      </ul>
      <p>
        By the end of this course, you'll be able to create and deploy robust backend applications using Node.js, Express.js, MySQL, and PostgreSQL.
      </p>
      <Link to="/buynow">Buy Now</Link>
      </div>
    </div>
  );
}

export default BackendCourse;