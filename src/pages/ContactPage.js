import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, MapPin, Clock, Send, MessageSquare,
  Facebook, Instagram, Twitter, Youtube, CheckCircle
} from 'lucide-react';
import './ContactPage.css';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', subject: '', message: '', newsletter: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Invalid email address';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.subject) errs.subject = 'Please select a subject';
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    try {
      // write to Firestore 'contacts' collection
      await addDoc(collection(db, 'contacts'), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        newsletter: !!formData.newsletter,
        createdAt: serverTimestamp()
      });

      setSubmitted(true);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '', newsletter: false });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Contact submit failed', err);
      setErrors(prev => ({ ...prev, submit: 'Failed to send message. Please try again later.' }));
    }
  };

  const contactInfo = [
    { icon: <MapPin size={24} />, title: 'Visit Us', lines: ['1 cross indiranagar BANGLORE', 'INDIA'] },
    { icon: <Phone size={24} />, title: 'Call Us', lines: ['+91 6361013154,'] },
    { icon: <Mail size={24} />, title: 'Email Us', lines: ['info@fitlife.com', 'support@fitlife.com', 'careers@fitlife.com'] },
    { icon: <Clock size={24} />, title: 'Working Hours', lines: ['Mon - Fri: 5:00 AM - 11:00 PM', 'Saturday: 6:00 AM - 9:00 PM', 'Sunday: 7:00 AM - 8:00 PM'] },
  ];

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="section-tag"><MessageSquare size={14} /> Contact</div>
            <h1 className="page-hero-title">GET IN <span>TOUCH</span></h1>
            <p className="page-hero-desc">
              Have questions? We'd love to hear from you. Reach out and our team will respond within 24 hours.
            </p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <span>Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, i) => (
              <div key={i} className="contact-info-card">
                <div className="contact-info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                {info.lines.map((line, li) => <p key={li}>{line}</p>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form-wrapper">
              <h2 className="section-title">SEND US A <span>MESSAGE</span></h2>
              <p className="section-subtitle" style={{ marginBottom: '30px' }}>
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitted && (
                <div className="form-success">
                  <CheckCircle size={20} />
                  <span>Thank you! Your message has been sent successfully. We'll respond within 24 hours.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      className={`form-input ${errors.firstName ? 'error' : ''}`}
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && <span className="form-error">{errors.firstName}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      className={`form-input ${errors.lastName ? 'error' : ''}`}
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && <span className="form-error">{errors.lastName}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      placeholder="+91 6361013154"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <select
                    name="subject"
                    className={`form-select ${errors.subject ? 'error' : ''}`}
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="training">Personal Training</option>
                    <option value="classes">Class Information</option>
                    <option value="billing">Billing & Payments</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership/Sponsorship</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <span className="form-error">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    placeholder="Tell us how we can help you..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <div className="form-group">
                  <div className="form-checkbox-group">
                    <input
                      type="checkbox"
                      name="newsletter"
                      className="form-checkbox"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      id="newsletter-check"
                    />
                    <label htmlFor="newsletter-check" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                      Subscribe to our newsletter for fitness tips and exclusive offers
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>

            {/* Map / Extra Info */}
            <div className="contact-sidebar">
              <div className="map-placeholder">
                <MapPin size={48} />
                <h3>Find Us Here</h3>
                <p>1 Cross Indranagar<br />Banglore </p>
                <a
                  href="https://maps.google.com/?q=Los+Angeles+CA+90001"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  Open in Google Maps
                </a>
              </div>

              <div className="contact-sidebar-socials">
                <h3>Follow Us</h3>
                <div className="social-links-grid">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link-card">
                    <Facebook size={20} /> Facebook
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link-card">
                    <Instagram size={20} /> Instagram
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link-card">
                    <Twitter size={20} /> Twitter
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-link-card">
                    <Youtube size={20} /> YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;