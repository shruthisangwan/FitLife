import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter,
  Youtube, Linkedin, ArrowRight, Heart, Send
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      {/* Newsletter Band */}
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get fitness tips, exclusive offers, and workout plans delivered to your inbox.</p>
            </div>
            <form className="newsletter-form" onSubmit={handleNewsletter}>
              <div className="newsletter-input-wrap">
                <Mail size={18} className="newsletter-icon" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="newsletter-btn">
                  {subscribed ? 'Subscribed!' : <><Send size={16} /> Subscribe</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <span className="logo-fit">FIT</span>
                <span className="logo-life">LIFE</span>
              </Link>
              <p className="footer-brand-desc">
                Transform your body and mind with FitLife. We provide world-class fitness
                training, nutrition guidance, and a supportive community to help you achieve
                your health goals.
              </p>
              <div className="footer-socials">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={18} /></a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={18} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links-group">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/about"><ArrowRight size={14} /> About Us</Link></li>
                <li><Link to="/classes"><ArrowRight size={14} /> Our Classes</Link></li>
                <li><Link to="/trainers"><ArrowRight size={14} /> Trainers</Link></li>
                <li><Link to="/pricing"><ArrowRight size={14} /> Membership Plans</Link></li>
                <li><Link to="/shop"><ArrowRight size={14} /> Shop</Link></li>
                <li><Link to="/blog"><ArrowRight size={14} /> Blog</Link></li>
                <li><Link to="/contact"><ArrowRight size={14} /> Contact Us</Link></li>
              </ul>
            </div>

            {/* Classes */}
            <div className="footer-links-group">
              <h4 className="footer-heading">Our Classes</h4>
              <ul className="footer-links">
                <li><Link to="/classes"><ArrowRight size={14} /> Strength Training</Link></li>
                <li><Link to="/classes"><ArrowRight size={14} /> HIIT Workouts</Link></li>
                <li><Link to="/classes"><ArrowRight size={14} /> Yoga & Pilates</Link></li>
                <li><Link to="/classes"><ArrowRight size={14} /> CrossFit</Link></li>
                <li><Link to="/classes"><ArrowRight size={14} /> Boxing & MMA</Link></li>
                <li><Link to="/classes"><ArrowRight size={14} /> Spin Classes</Link></li>
                <li><Link to="/classes"><ArrowRight size={14} /> Zumba</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
              <h4 className="footer-heading">Contact Us</h4>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <MapPin size={18} />
                  <div>
                    <strong>Main Location</strong>
                    <p>1 Cross Indiranagar Banglore INDIA </p>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <Phone size={18} />
                  <div>
                    <strong>Phone Numbers</strong>
                    <p><a href="tel:+91 6361013154">+91 6361013154</a></p>
                                    </div>
                </div>
                <div className="footer-contact-item">
                  <Mail size={18} />
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:info@fitlife.com">info@fitlife.com</a></p>
                    <p><a href="mailto:support@fitlife.com">support@fitlife.com</a></p>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <Clock size={18} />
                  <div>
                    <strong>Working Hours</strong>
                    <p>Mon - Fri: 5:00 AM - 11:00 PM</p>
                    <p>Sat - Sun: 6:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>
              © {new Date().getFullYear()} <strong>FitLife</strong>. All Rights Reserved. Made with{' '}
              <Heart size={14} className="heart-icon" /> for fitness lovers.
            </p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#refund">Refund Policy</a>
              <a href="#sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;