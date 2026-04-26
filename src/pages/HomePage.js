import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Play, Dumbbell, Heart, Users, Trophy, Clock,
  Star, ChevronLeft, ChevronRight, Target, Zap, Shield,
  TrendingUp, Award, CheckCircle, MapPin, Phone, Mail
} from 'lucide-react';
import './HomePage.css';

// Counter hook
const useCounter = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return [count, ref];
};

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const stats = [
    { icon: <Users size={28} />, value: 15000, suffix: '+', label: 'Active Members' },
    { icon: <Trophy size={28} />, value: 200, suffix: '+', label: 'Expert Trainers' },
    { icon: <Dumbbell size={28} />, value: 50, suffix: '+', label: 'Fitness Programs' },
    { icon: <Star size={28} />, value: 98, suffix: '%', label: 'Satisfaction Rate' },
  ];

  const benefits = [
    { icon: <Target size={32} />, title: 'Personalized Plans', desc: 'Custom workout and nutrition plans tailored to your unique goals, body type, and fitness level.' },
    { icon: <Users size={32} />, title: 'Expert Trainers', desc: 'Certified professionals with 10+ years experience in strength, cardio, yoga, and sports training.' },
    { icon: <Zap size={32} />, title: 'Modern Equipment', desc: 'State-of-the-art machines, free weights, functional training zones, and recovery facilities.' },
    { icon: <Heart size={32} />, title: 'Nutrition Guidance', desc: 'Dedicated nutritionists create meal plans, track macros, and provide dietary counseling.' },
    { icon: <Shield size={32} />, title: 'Safe Environment', desc: 'Sanitized equipment, trained staff, 24/7 surveillance, and emergency medical support.' },
    { icon: <TrendingUp size={32} />, title: 'Progress Tracking', desc: 'Advanced body composition analysis, fitness assessments, and app-based progress dashboards.' },
  ];

  const featuredClasses = [
    { name: 'Strength Training', trainer: 'Rohit Kumar', time: '6:00 AM - 7:30 AM', level: 'All Levels', spots: 8, color: '#ff6b6b', price: '₹1,200/session', image: 'strength' },
    { name: 'HIIT Bootcamp', trainer: 'Priya Verma', time: '7:00 AM - 8:00 AM', level: 'Intermediate', spots: 5, color: '#ff8c42', price: '₹999/session', image: 'cardio' },
    { name: 'Power Yoga', trainer: 'Anjali Kapoor', time: '8:00 AM - 9:30 AM', level: 'Beginner', spots: 12, color: '#9d84b7', price: '₹899/session', image: 'yoga' },
    { name: 'Boxing Fundamentals', trainer: 'Vikram Singh', time: '5:30 PM - 7:00 PM', level: 'All Levels', spots: 6, color: '#2d3436', price: '₹1,499/session', image: 'boxing' },
  ];

  const testimonials = [
    { name: 'Priya Sharma', role: 'Lost 25 kg in 6 months', text: 'FitLife changed my entire fitness journey! The trainers at our Noida center are incredibly supportive and professional. The facilities are world-class and the community keeps me motivated every day.', rating: 5, color: '#ff6b6b' },
    { name: 'Arjun Patel', role: 'Marathon Runner', text: 'The personalized training programs at FitLife helped me complete Mumbai Marathon. The expert trainers understand your goals perfectly. Best investment in my health and fitness!', rating: 5, color: '#3498db' },
    { name: 'Sneha Gupta', role: 'Gained confidence & strength', text: 'As a beginner, I was nervous about joining a gym. FitLife made me feel so welcome! The yoga and strength training classes are amazing. I feel stronger and more confident now.', rating: 5, color: '#e91e63' },
    { name: 'Rajesh Kumar', role: 'IT Professional', text: 'The flexible timings and variety of classes fit perfectly into my busy schedule. The nutrition guidance from their dieticians is incredible. Down 20 kg and feeling great!', rating: 5, color: '#f39c12' },
  ];

  const pricingPlans = [
    { name: 'Basic', price: 1999, period: '/month', features: ['Access to gym floor', 'Basic equipment usage', 'Locker room access', '2 group classes/week', 'Fitness assessment (yearly)', 'Mobile app access'], popular: false },
    { name: 'Premium', price: 3999, period: '/month', features: ['Everything in Basic', 'Unlimited group classes', 'Personal trainer (2x/month)', 'Nutrition consultation', 'Sauna & steam room', 'Guest passes (2/month)', 'Priority booking'], popular: true },
    { name: 'Elite', price: 6999, period: '/month', features: ['Everything in Premium', 'Unlimited personal training', 'Custom meal plans', 'Recovery & spa access', 'VIP lounge access', 'Exclusive workshops', 'Quarterly body scan', '24/7 trainer support'], popular: false },
  ];

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg-overlay"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text animate-fadeInUp">
              <div className="hero-badge">
                <Zap size={14} />
                <span>#1 Rated Fitness Center in INDIA</span>
              </div>
              <h1 className="hero-title">
                TRANSFORM <br />
                YOUR <span>BODY</span>, <br />
                TRANSFORM <br />
                YOUR <span>LIFE</span>
              </h1>
              <p className="hero-description">
                Join 15,000+ members who've already transformed their lives. World-class trainers,
                cutting-edge equipment, and proven programs — all under one roof.
              </p>
              <div className="hero-cta">
                <Link to="/join" className="btn btn-primary btn-lg">
                  Start Your Journey <ArrowRight size={18} />
                </Link>
                <a href="https://www.youtube.com/shorts/Exiox-vJ6fc?feature=share" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg hero-video-btn">
                  <div className="play-icon"><Play size={18} /></div>
                  Watch Video
                </a>
              </div>
              <div className="hero-trust">
                <div className="hero-trust-avatars">
                  {['#ff6b6b', '#ff8c42', '#9d84b7', '#2d3436', '#ffd166'].map((color, i) => (
                    <div key={i} className="trust-avatar" style={{ backgroundImage: `linear-gradient(135deg, ${color}ff 0%, ${color}cc 100%)` }}></div>
                  ))}
                </div>
                <div className="hero-trust-text">
                  <div className="trust-stars">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#ffd166" color="#ffd166" />)}
                  </div>
                  <span>4.9/5 from 2,500+ reviews</span>
                </div>
              </div>
            </div>
            <div className="hero-visual animate-slideInRight">
              <div className="hero-image-card">
                <div className="hero-image-display" style={{ backgroundImage: 'linear-gradient(135deg, #ff6b6bff 0%, #ff6b6bcc 100%)' }}></div>
                <div className="hero-stats-floating">
                  <div className="floating-stat stat-1">
                    <TrendingUp size={16} />
                    <span>+340% Strength</span>
                  </div>
                  <div className="floating-stat stat-2">
                    <Heart size={16} />
                    <span>98% Happy</span>
                  </div>
                  <div className="floating-stat stat-3">
                    <Award size={16} />
                    <span>Top Rated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll Down</span>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => {
              const [count, ref] = useCounter(stat.value);
              return (
                <div key={index} className="stat-card" ref={ref}>
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{count.toLocaleString()}{stat.suffix}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="section benefits-section" id="benefits">
        <div className="container">
          <div className="section-header">
            <div className="section-tag"><Dumbbell size={14} /> Why Choose Us</div>
            <h2 className="section-title">WHY <span>FITLIFE</span> IS DIFFERENT</h2>
            <p className="section-subtitle">
              We don't just build bodies — we build confidence, discipline, and lifelong healthy habits.
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-desc">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED CLASSES ===== */}
      <section className="section classes-preview-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag"><Zap size={14} /> Featured Classes</div>
            <h2 className="section-title">POPULAR <span>CLASSES</span></h2>
            <p className="section-subtitle">
              From high-intensity workouts to mindful yoga — find the perfect class for your fitness level.
            </p>
          </div>
          <div className="classes-preview-grid">
            {featuredClasses.map((cls, index) => (
              <div key={index} className="class-preview-card">
                <div className="class-preview-image" style={{ 
                  backgroundImage: `
                    linear-gradient(135deg, rgba(${cls.color === '#ff6b6b' ? '255, 107, 107' : cls.color === '#ff8c42' ? '255, 140, 66' : cls.color === '#9d84b7' ? '157, 132, 183' : '45, 52, 54'}, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%),
                    linear-gradient(45deg, 
                      rgba(255, 255, 255, 0.1) 0%, 
                      rgba(255, 255, 255, 0.05) 25%,
                      rgba(0, 0, 0, 0.1) 50%,
                      rgba(255, 255, 255, 0.05) 75%,
                      rgba(255, 255, 255, 0.1) 100%
                    )
                  ` 
                }}>
                  <div className="class-image-placeholder">
                    <div className="class-image-text">
                      {cls.image === 'strength' && '🏋️ STRENGTH'}
                      {cls.image === 'cardio' && '🔥 CARDIO'}
                      {cls.image === 'yoga' && '🧘 YOGA'}
                      {cls.image === 'boxing' && '🥊 BOXING'}
                    </div>
                  </div>
                  <div className="class-level-badge">{cls.level}</div>
                </div>
                <div className="class-preview-content">
                  <h3>{cls.name}</h3>
                  <div className="class-preview-meta">
                    <span><Users size={14} /> {cls.trainer}</span>
                    <span><Clock size={14} /> {cls.time}</span>
                  </div>
                  <div className="class-preview-footer">
                    <span className="class-price">{cls.price}</span>
                    <span className="class-spots">{cls.spots} spots left</span>
                  </div>
                  <Link to="/classes" className="btn btn-outline btn-sm" style={{ width: '100%', marginTop: '12px' }}>
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/classes" className="btn btn-secondary">
              View All Classes <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <div className="cta-bg-overlay"></div>
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">READY TO START YOUR <span>TRANSFORMATION</span>?</h2>
            <p className="cta-text">
              Join FitLife today and get your first week FREE. No commitments. No hidden fees.
              Just results.
            </p>
            <div className="cta-buttons">
              <Link to="/join" className="btn btn-primary btn-lg">
                Claim Free Week <ArrowRight size={18} />
              </Link>
              <Link to="/pricing" className="btn btn-secondary btn-lg">
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING PREVIEW ===== */}
      <section className="section pricing-preview-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag"><Award size={14} /> Membership Plans</div>
            <h2 className="section-title">AFFORDABLE <span>PRICING</span></h2>
            <p className="section-subtitle">
              Flexible plans designed to fit every budget. Cancel anytime, no hidden charges.
            </p>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <div className="pricing-header">
                  <h3 className="pricing-name">{plan.name}</h3>
                  <div className="pricing-price">
                    <span className="currency">$</span>
                    <span className="amount">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/join"
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
                  style={{ width: '100%' }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag"><Star size={14} /> Testimonials</div>
            <h2 className="section-title">WHAT OUR <span>MEMBERS</span> SAY</h2>
            <p className="section-subtitle">
              Real stories from real people who transformed their lives with FitLife.
            </p>
          </div>
          <div className="testimonials-carousel">
            <button className="carousel-btn prev" onClick={prevTestimonial}>
              <ChevronLeft size={24} />
            </button>
            <div className="testimonial-card-wrapper">
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#ffd166" color="#ffd166" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ backgroundImage: `linear-gradient(135deg, ${testimonials[currentTestimonial].color}ff 0%, ${testimonials[currentTestimonial].color}cc 100%)` }}></div>
                  <div>
                    <strong>{testimonials[currentTestimonial].name}</strong>
                    <span>{testimonials[currentTestimonial].role}</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-btn next" onClick={nextTestimonial}>
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRANDS / PARTNERS ===== */}
      <section className="brands-section">
        <div className="container">
          <p className="brands-label">Trusted By Leading Fitness Brands</p>
          <div className="brands-grid">
            {['Nike', 'Adidas', 'Under Armour', 'Reebok', 'Puma', 'New Balance'].map((brand, i) => (
              <div key={i} className="brand-item">{brand}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;