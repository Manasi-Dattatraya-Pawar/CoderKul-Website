import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

function FrontendCourse() {
  return (
    <div className="course-container">
      <div className="course-card">
      <h2>Frontend Development Course</h2>
      <p>
        This course covers all the core fundamentals of modern web design, including HTML, CSS, and JavaScript. You will learn how to create interactive and dynamic web pages, and bring your web pages to life with code. The course is designed to get you started quickly and easily with creating web pages, and covers all the essentials so that you can begin quickly on your journey to create amazing looking websites.
      </p>
      <h3 id="course-outline">Course Outline</h3>
      <ul>
        <li>Introduction to HTML</li>
        <li>Deep Dive into CSS</li>
        <li>Basics of JavaScript</li>
        <li>Creating Responsive WebPages</li>
        <li>Interactive and Dynamic Web Pages</li>
      </ul>
      <p>
        By the end of this course, you'll be able to create modern, responsive, and interactive web pages using HTML, CSS, and JavaScript.
      </p>
      <Link to="/buynow">Buy Now</Link>
    </div>
    </div>
  );
}

export default FrontendCourse;