import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/classes', label: 'Classes' },
    { path: '/trainers', label: 'Trainers' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/shop', label: 'Shop' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <a href="tel:+18005551234" className="top-bar-item">
                <Phone size={13} />
                <span>+1 (800) 555-1234</span>
              </a>
              <a href="mailto:info@fitlife.com" className="top-bar-item">
                <Mail size={13} />
                <span>info@fitlife.com</span>
              </a>
              <span className="top-bar-item hide-mobile">
                <Clock size={13} />
                <span>Mon-Sat: 5AM - 11PM</span>
              </span>
            </div>
            <div className="top-bar-right">
              <div className="top-bar-socials">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={14} /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={14} /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={14} /></a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={14} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-content">
            <Link to="/" className="navbar-logo">
              <span className="logo-fit">FIT</span>
              <span className="logo-life">LIFE</span>
            </Link>

            <div className="navbar-links">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="navbar-actions">
              <Link to="/join" className="btn btn-primary btn-sm">
                Join Now
              </Link>
              <button
                className="navbar-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-links">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-menu-link ${location.pathname === link.path ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/join" className="btn btn-primary" style={{ marginTop: '20px', width: '100%' }}>
              Join Now
            </Link>
          </div>
          <div className="mobile-menu-info">
            <a href="tel:+18005551234" className="mobile-info-item">
              <Phone size={16} />
              <span>+1 (800) 555-1234</span>
            </a>
            <a href="mailto:info@fitlife.com" className="mobile-info-item">
              <Mail size={16} />
              <span>info@fitlife.com</span>
            </a>
            <span className="mobile-info-item">
              <MapPin size={16} />
              <span>123 Fitness Ave, LA, CA 90001</span>
            </span>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="mobile-overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Navbar;