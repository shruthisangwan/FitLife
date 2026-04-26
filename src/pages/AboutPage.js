import React from 'react';
import { Link } from 'react-router-dom';
import {
  Target, Eye, Heart, Award, Users, Dumbbell, Clock,
  ArrowRight, CheckCircle, Star, MapPin
} from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  const values = [
    { icon: <Target size={28} />, title: 'Results-Driven', desc: 'Every program is designed with measurable outcomes. We track, analyze, and optimize your fitness journey continuously.' },
    { icon: <Heart size={28} />, title: 'Community First', desc: 'We believe fitness is better together. Our supportive community keeps you motivated and accountable.' },
    { icon: <Award size={28} />, title: 'Excellence', desc: 'From equipment to trainers, we never compromise on quality. Only the best for our members.' },
    { icon: <Eye size={28} />, title: 'Innovation', desc: 'We stay ahead of fitness trends, incorporating latest research and technology into our programs.' },
  ];

  const milestones = [
    { year: '2010', title: 'Founded', desc: 'FitLife started as a small gym in Banglore with 500 sq ft and a dream to transform lives through fitness.' },
    { year: '2013', title: 'First Expansion', desc: 'Expanded to 5,000 sq ft with dedicated zones for strength, cardio, and yoga.' },
    { year: '2016', title: '5,000 Members', desc: 'Reached our first major milestone, proving our approach works for everyone in Delhi-NCR.' },
    { year: '2018', title: 'Online Launch', desc: 'Launched virtual training platform, reaching fitness enthusiasts across India with digital courses.' },
    { year: '2020', title: 'Multi-Location', desc: 'Opened 3 new locations across Delhi-NCR region, making fitness accessible to more communities.' },
    { year: '2024', title: '15,000+ Members', desc: 'Today we serve over 15,000 active members with 200+ certified trainers across India.' },
  ];

  const teamLeaders = [
    { name: 'Shruthi', role: 'Founder & CEO', experience: '20+ years in fitness',  bio: 'Former national powerlifter turned entrepreneur. Rajesh founded FitLife with a vision to make world-class fitness accessible to everyone in India.' },
    { name: 'Dr. Priya Sharma', role: 'Chief Health Officer', experience: 'PhD in Sports Science', bio: 'Leading researcher in exercise physiology and nutrition science. Priya ensures all our programs are backed by scientific evidence and Indian health standards.' },
    { name: 'Vikram Singh', role: 'Head of Training', experience: '15+ years coaching', bio: 'NASM-certified strength coach who has trained professional athletes and everyday fitness enthusiasts across India.' },
  ];

  const facilities = [
    '25,000 sq ft main training floor',
    'Olympic lifting platforms',
    'Dedicated cardio zone with 80+ machines',
    'Group fitness studio (capacity: 50)',
    'Yoga & meditation room',
    'Boxing ring & MMA cage',
    'Indoor cycling studio',
    'Recovery lounge with cryo & sauna',
    'Juice bar & nutrition center',
    'Child care facility',
    'Member lounge with WiFi',
    'Free parking (200+ spots)',
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="section-tag"><Star size={14} /> About Us</div>
            <h1 className="page-hero-title">OUR <span>STORY</span></h1>
            <p className="page-hero-desc">
              Founded in 2010, FitLife has grown from a small neighborhood gym in Noida to one of the most
              trusted fitness brands in India. Our mission remains the same: transform lives through fitness and wellness.
            </p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <span>About Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section about-mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-text">
              <div className="section-tag"><Target size={14} /> Our Mission</div>
              <h2 className="section-title">EMPOWERING PEOPLE TO LIVE THEIR <span>HEALTHIEST LIVES</span></h2>
              <p className="section-subtitle">
                At FitLife, we believe that fitness is not just about physical transformation — it's about
                building confidence, mental resilience, and a lifestyle that lasts. We combine cutting-edge
                facilities, expert coaching, and a supportive community to help every member unlock their
                full potential.
              </p>
              <ul className="mission-points">
                <li><CheckCircle size={18} /> Science-backed training methodologies</li>
                <li><CheckCircle size={18} /> Inclusive environment for all fitness levels</li>
                <li><CheckCircle size={18} /> Holistic approach: body, mind, and nutrition</li>
                <li><CheckCircle size={18} /> Continuous innovation in fitness technology</li>
              </ul>
              <Link to="/join" className="btn btn-primary" style={{ marginTop: '20px' }}>
                Join Our Community <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mission-visual">
              <div className="mission-image-card">
                <div className="mission-emoji"> </div>
                <div class="gym-image">
  <img src="https://media.istockphoto.com/id/1211886784/photo/modern-gym-interior-with-sport-and-fitness-equipment-fitness-center-interior-interior-workout.jpg?s=612x612&w=0&k=20&c=MCmLSxq-tDeh6XEDWPRewkLJr-FZR734sdNQ3wbExTc=" alt="Gym workout" />
</div>
              </div>
              <div className="mission-stats">
                <div className="mission-stat">
                  <span className="mission-stat-value">14+</span>
                  <span className="mission-stat-label">Years of Excellence</span>
                </div>
                <div className="mission-stat">
                  <span className="mission-stat-value">4</span>
                  <span className="mission-stat-label">Locations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section about-values">
        <div className="container">
          <div className="section-header">
            <div className="section-tag"><Heart size={14} /> Core Values</div>
            <h2 className="section-title">WHAT WE <span>STAND FOR</span></h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section about-timeline">
        <div className="container">
          <div className="section-header">
            <div className="section-tag"><Clock size={14} /> Our Journey</div>
            <h2 className="section-title">KEY <span>MILESTONES</span></h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <span className="timeline-year">{m.year}</span>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section about-leadership">
        <div className="container">
          <div className="section-header">
            <div className="section-tag"><Users size={14} /> Leadership</div>
            <h2 className="section-title">MEET OUR <span>LEADERS</span></h2>
          </div>
          <div className="leaders-grid">
            {teamLeaders.map((leader, i) => (
              <div key={i} className="leader-card">
                <div className="leader-avatar">{leader.emoji}</div>
                <h3>{leader.name}</h3>
                <span className="leader-role">{leader.role}</span>
                <span className="leader-exp">{leader.experience}</span>
                <p>{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section about-facilities">
        <div className="container">
          <div className="section-header">
            <div className="section-tag"><Dumbbell size={14} /> Facilities</div>
            <h2 className="section-title">WORLD-CLASS <span>FACILITIES</span></h2>
            <p className="section-subtitle">
              Our flagship location features everything you need for a complete fitness experience.
            </p>
          </div>
          <div className="facilities-grid">
            {facilities.map((f, i) => (
              <div key={i} className="facility-item">
                <CheckCircle size={18} />
                <span>{f}</span>
              </div>
            ))}
          </div>
          <div className="facilities-location">
            <MapPin size={20} />
            <span><strong>Main Location:</strong> 1 cross indiranagar banglore INDIA </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-content">
            <h2>READY TO BE PART OF THE <span>FITLIFE</span> FAMILY?</h2>
            <p>Start your free trial today and experience the difference.</p>
            <Link to="/join" className="btn btn-primary btn-lg">
              Start Free Trial <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;