import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to Our Courses</h1>
      </header>
      <main>
        <div className="course-option">
          
          <div className="course-card">
            <h3>Java Course</h3>
            <p>
              In this course, you'll learn the fundamentals of Java programming, including syntax, data types, control structures, and object-oriented concepts.
            </p>
            <Link to="/java">Learn More</Link>
          </div>
          <div className="course-card">
            <h3>C# Course</h3>
            <p>
              In this course, you'll learn the fundamentals of C# programming, including syntax, data types, control structures, and object-oriented concepts.
            </p>
            <Link to="/csharp">Learn More</Link>
          </div>
          <div className="course-card">
            <h3>C Course</h3>
            <p>
              In this course, you'll learn the fundamentals of C programming, including syntax, data types, control structures, and pointers.
            </p>
            <Link to="/c">Learn More</Link>
          </div>
          <div className="course-card">
            <h3>C++ Course</h3>
            <p>
              In this course, you'll learn the fundamentals of C++ programming, including syntax, data types, control structures, and object-oriented concepts.
            </p>
            <Link to="/cplusplus">Learn More</Link>
          </div>
          <div className="course-card">
            <h3>Frontend Course</h3>
            <p>
              In this course, you'll learn the fundamentals of frontend development, including HTML, CSS, and JavaScript.
            </p>
            <Link to="/frontend">Learn More</Link>
          </div>
          <div className="course-card">
            <h3>Backend Course</h3>
            <p>
              In this course, you'll learn the fundamentals of backend development, including server-side programming, databases, and APIs.
            </p>
            <Link to="/backend">Learn More</Link>
          </div>
        </div>
      </main>

    </div>
  );
}

export default Home;