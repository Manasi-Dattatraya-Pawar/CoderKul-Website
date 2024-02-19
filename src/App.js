import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import Home from './Home';
import CSharp from './CSharp';
import Java from './Java';
import C from './CCourse';
import CPlusPlus from './CPlusPlus';
import Frontend from './Frontend';
import Backend from './Backend';
import BlogList from './BlogList';
import './App.css';
import ContactForm from './ContactForm';
// import Profile from './profile';



function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const blogPosts = [
    { id: 1, title: 'First Blog Post', summary: 'This is the summary of the first blog post.' },
    { id: 2, title: 'Second Blog Post', summary: 'This is the summary of the second blog post.' },
    // Add more blog post objects as needed
  ];

  return (
    <Router>
      <div>
        <header className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
          <nav className="nav">
            <div className="logo-container">
              <div className="logo">Coderkul</div>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/" className="nav-link" >Home</Link>
              </li>
              <li className="dropdown">
                <span className="nav-link">Courses</span>
                <ul className="dropdown-content">
                  <li><Link to="/java" >Java</Link></li>
                  <li><Link to="/c" >C</Link></li>
                  <li><Link to="/csharp" >C#</Link></li>
                  <li><Link to="/cplusplus" >C++</Link></li>
                  <li><Link to="/frontend" >Frontend</Link></li>
                  <li><Link to="/backend" >Backend</Link></li>
                </ul>
              </li>
              <li><Link to="/blogs" className="nav-link" >Blogs</Link></li>
              <li><Link to="/contact" className="nav-link" >Contact Us</Link></li>
              {/* <li><Link to="/profile" className="nav-link" >Profile</Link></li> */}
            </ul>
          </nav>
          
        </header>
        <main className="app-main">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/c" element={<C />} />
              <Route path="/cplusplus" element={<CPlusPlus />} />
              <Route path="/java" element={<Java />} />
              <Route path="/csharp" element={<CSharp />} />
              <Route path="/frontend" element={<Frontend />} />
              <Route path="/backend" element={<Backend />} />
              <Route path="/blogs" element={<BlogList blogPosts={blogPosts} />} />
              <Route path="/contact" element={<ContactForm />} />
              {/* <Route path="/profile" element={<Profile />} /> */}
            </Routes>
          </main>
          
        <footer className="app-footer">
            <div className="social-icons">
              <a href="https://twitter.com/example"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://facebook.com/example"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://instagram.com/example"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
            <p>&copy; 2024 CoderKul ... The Gurukul For Coders!</p>
          </footer>
      </div>
    </Router>
  );
}

export default App;
