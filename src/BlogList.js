import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import './BlogList.css';

const blogPosts = [
  {
    id: 1,
    title: "My First Blog Post",
    summary: "This is a summary of my first blog post.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio."
  },
  {
    id: 2,
    title: "My Second Blog Post",
    summary: "This is a summary of my second blog post.",
    content: "Nullam ultrices posuere velit. Duis nec scelerisque turpis. Nunc lacinia rhoncus mauris, nec maximus odio dictum vel.This is a summary of my first blog post.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio."
  },
  {
    id: 3,
    title: "My Third Blog Post",
    summary: "This is a summary of my third blog post.",
    content: "Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.This is a summary of my first blog post.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio."
  },
  {
    id: 4,
    title: "My First Blog Post",
    summary: "This is a summary of my first blog post.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.This is a summary of my first blog post.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio."
  },
  {
    id: 5,
    title: "My Second Blog Post",
    summary: "This is a summary of my second blog post.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio."
  },
  {
    id: 6,
    title: "My Third Blog Post",
    summary: "This is a summary of my third blog post.",
    content: "Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio.Vestibulum id tincidunt purus. Curabitur vel fermentum lacus. Nullam porttitor turpis in commodo semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero aliquet, viverra sapien eu, lacinia odio."
  }
];

function BlogList() {
  const [viewCounts, setViewCounts] = useState({});
  const [expandedPostId, setExpandedPostId] = useState(null); // Track the id of the expanded blog post

  // Simulate initial view counts
  useEffect(() => {
    const initialViewCounts = {};
    blogPosts.forEach(blogPost => {
      initialViewCounts[blogPost.id] = Math.floor(Math.random() * 100); // Random initial view count
    });
    setViewCounts(initialViewCounts);
  }, []);

  const handleLike = (id) => {
    setViewCounts(prevViewCounts => ({
      ...prevViewCounts,
      [id]: prevViewCounts[id] + 1,
    }));
  };

  const handleShare = (id) => {
    // Implement social media sharing functionality
    alert(`Share Blog Post ${id}`);
  };

  const toggleExpandedPost = (id) => {
    setExpandedPostId(expandedPostId === id ? null : id);
  };

  return (
    <div className="blog-list">
      {blogPosts.map(blogPost => (
        <div key={blogPost.id} className="blog-post">
          <h2>{blogPost.title}</h2>
          <p>{expandedPostId === blogPost.id ? blogPost.content : blogPost.summary}</p>
          {expandedPostId !== blogPost.id && (
            <button onClick={() => toggleExpandedPost(blogPost.id)}>Learn More</button>
          )}
          <div className="icon-container">
            <button className="icon-button" onClick={() => handleLike(blogPost.id)}>
              <FontAwesomeIcon icon={faHeart} />
              <span>{viewCounts[blogPost.id]}</span>
            </button>
            <button className="icon-button" onClick={() => handleShare(blogPost.id)}>
              <FontAwesomeIcon icon={faShareSquare} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
