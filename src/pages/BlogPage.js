import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, User, ArrowRight, Tag } from 'lucide-react';
import './BlogPage.css';

const BlogPage = () => {
  const posts = [
    { title: '10 Best Exercises for Building Core Strength', excerpt: 'A strong core is the foundation of all fitness. Learn the most effective exercises backed by science to build a rock-solid midsection.', author: 'Mike Johnson', date: 'Dec 15, 2024', readTime: '8 min read', category: 'Training', emoji: '💪', featured: true },
    { title: 'Complete Guide to Meal Prep for Muscle Gain', excerpt: 'Nutrition is 80% of your results. This comprehensive guide covers macros, recipes, and weekly meal prep strategies for muscle growth.', author: 'Dr. Sarah Kim', date: 'Dec 12, 2024', readTime: '12 min read', category: 'Nutrition', emoji: '🍗', featured: true },
    { title: 'How to Start Running: A Beginner\'s Guide', excerpt: 'From couch to 5K — everything you need to know about starting a running routine safely and effectively.', author: 'Sarah Williams', date: 'Dec 10, 2024', readTime: '6 min read', category: 'Cardio', emoji: '🏃', featured: false },
    { title: 'The Science of Recovery: Why Rest Days Matter', excerpt: 'Overtraining is real. Understand the science behind muscle recovery and how to optimize your rest days for better results.', author: 'Dr. Amy Chen', date: 'Dec 8, 2024', readTime: '10 min read', category: 'Recovery', emoji: '😴', featured: false },
    { title: 'Yoga for Stress Relief: 15-Minute Daily Routine', excerpt: 'Combat daily stress with this simple yoga routine you can do anywhere. Perfect for busy professionals.', author: 'Emma Davis', date: 'Dec 5, 2024', readTime: '5 min read', category: 'Yoga', emoji: '🧘', featured: false },
    { title: 'Understanding Protein: How Much Do You Really Need?', excerpt: 'Debunking protein myths and giving you evidence-based recommendations for your fitness goals.', author: 'Dr. Sarah Kim', date: 'Dec 2, 2024', readTime: '9 min read', category: 'Nutrition', emoji: '🥚', featured: false },
    { title: 'Home Workout: Full Body Routine No Equipment Needed', excerpt: 'Can\'t make it to the gym? This full-body workout requires zero equipment and only 30 minutes of your time.', author: 'Alex Turner', date: 'Nov 28, 2024', readTime: '7 min read', category: 'Training', emoji: '🏠', featured: false },
    { title: 'Boxing 101: Why Every Fitness Enthusiast Should Try It', excerpt: 'Boxing isn\'t just for fighters. Discover why boxing training is one of the most effective full-body workouts available.', author: 'Carlos Rivera', date: 'Nov 25, 2024', readTime: '6 min read', category: 'Training', emoji: '🥊', featured: false },
    { title: 'Sleep & Fitness: The Ultimate Performance Hack', excerpt: 'Sleep is the most underrated performance enhancer. Learn how to optimize your sleep for maximum fitness gains.', author: 'Dr. Amy Chen', date: 'Nov 22, 2024', readTime: '11 min read', category: 'Recovery', emoji: '🌙', featured: false },
  ];

  const featuredPosts = posts.filter(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);
  const categories = [...new Set(posts.map(p => p.category))];

  return (
    <div className="blog-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="section-tag"><BookOpen size={14} /> Blog</div>
            <h1 className="page-hero-title">FITNESS <span>BLOG</span></h1>
            <p className="page-hero-desc">
              Expert articles on training, nutrition, recovery, and wellness. Stay informed, stay fit.
            </p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <span>Blog</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section blog-featured-section">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '30px' }}>FEATURED <span>ARTICLES</span></h2>
          <div className="featured-posts-grid">
            {featuredPosts.map((post, i) => (
              <div key={i} className="featured-post-card">
                <div className="featured-post-image">
                  <span className="post-emoji-lg">{post.emoji}</span>
                  <span className="post-category-badge">{post.category}</span>
                </div>
                <div className="featured-post-body">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-meta">
                    <span><User size={14} /> {post.author}</span>
                    <span><Clock size={14} /> {post.date}</span>
                    <span><BookOpen size={14} /> {post.readTime}</span>
                  </div>
                  <button className="btn btn-outline btn-sm">
                    Read Article <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section blog-list-section">
        <div className="container">
          <div className="blog-layout">
            <div className="blog-main">
              <h2 className="section-title" style={{ marginBottom: '30px', fontSize: '1.5rem' }}>
                LATEST <span>ARTICLES</span>
              </h2>
              <div className="blog-posts-list">
                {regularPosts.map((post, i) => (
                  <div key={i} className="blog-post-card">
                    <div className="blog-post-thumb">
                      <span>{post.emoji}</span>
                    </div>
                    <div className="blog-post-content">
                      <span className="post-cat-tag"><Tag size={12} /> {post.category}</span>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <div className="post-meta">
                        <span><User size={14} /> {post.author}</span>
                        <span><Clock size={14} /> {post.date}</span>
                        <span><BookOpen size={14} /> {post.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              <div className="sidebar-widget">
                <h4>Categories</h4>
                <ul className="sidebar-categories">
                  {categories.map((cat, i) => (
                    <li key={i}>
                      <span>{cat}</span>
                      <span className="cat-count">{posts.filter(p => p.category === cat).length}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-widget">
                <h4>Newsletter</h4>
                <p className="sidebar-text">Get weekly fitness tips delivered to your inbox.</p>
                <input type="email" className="form-input" placeholder="Your email" />
                <button className="btn btn-primary btn-sm" style={{ width: '100%', marginTop: '10px' }}>
                  Subscribe
                </button>
              </div>

              <div className="sidebar-widget">
                <h4>Popular Tags</h4>
                <div className="sidebar-tags">
                  {['Weight Loss', 'Muscle Gain', 'Nutrition', 'HIIT', 'Yoga', 'Recovery', 'Supplements', 'Cardio', 'Strength', 'Mindfulness'].map((tag, i) => (
                    <span key={i} className="sidebar-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;