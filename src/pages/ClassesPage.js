import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Zap, Star, Filter, Calendar, ArrowRight } from 'lucide-react';
import './ClassesPage.css';

const ClassesPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Strength', 'Cardio', 'Yoga', 'Combat', 'Dance', 'Recovery'];

  const classes = [
    { name: 'Power Strength Training', category: 'Strength', trainer: 'Rohit Kumar', time: 'Mon, Wed, Fri — 6:00 AM', duration: '90 min', level: 'All Levels', capacity: 20, enrolled: 14, price: '₹1,200/session', rating: 4.9, color: '#ff6b6b', image: 'strength', description: 'Build muscle, increase strength, and boost metabolism with compound movements and progressive overload.' },
    { name: 'HIIT Bootcamp', category: 'Cardio', trainer: 'Priya Verma', time: 'Tue, Thu — 7:00 AM', duration: '60 min', level: 'Intermediate', capacity: 25, enrolled: 20, price: '₹999/session', rating: 4.8, color: '#ff8c42', image: 'cardio', description: 'High-intensity interval training that burns fat fast and improves cardiovascular endurance.' },
    { name: 'Vinyasa Flow Yoga', category: 'Yoga', trainer: 'Anjali Kapoor', time: 'Daily — 8:00 AM', duration: '75 min', level: 'Beginner', capacity: 30, enrolled: 18, price: '₹899/session', rating: 4.9, color: '#9d84b7', image: 'yoga', description: 'Connect breath with movement in this flowing yoga class that builds flexibility and inner peace.' },
    { name: 'Boxing Fundamentals', category: 'Combat', trainer: 'Vikram Singh', time: 'Mon, Wed — 5:30 PM', duration: '90 min', level: 'All Levels', capacity: 15, enrolled: 12, price: '₹1,499/session', rating: 4.9, color: '#2d3436', image: 'boxing', description: 'Learn proper boxing technique, footwork, and combinations while getting an incredible total-body workout.' },
    { name: 'CrossFit WOD', category: 'Strength', trainer: 'Arjun Patel', time: 'Mon-Sat — 6:30 AM', duration: '60 min', level: 'Advanced', capacity: 20, enrolled: 18, price: '₹1,399/session', rating: 4.7, color: '#e74c3c', image: 'crossfit', description: 'Constantly varied functional movements performed at high intensity. New WOD every day.' },
    { name: 'Spin Cycle', category: 'Cardio', trainer: 'Neha Chopra', time: 'Tue, Thu, Sat — 7:00 AM', duration: '45 min', level: 'All Levels', capacity: 35, enrolled: 28, price: '₹749/session', rating: 4.8, color: '#f39c12', image: 'cycling', description: 'High-energy indoor cycling with pumping music, interval sprints, and hill climbs.' },
    { name: 'Zumba Fitness', category: 'Dance', trainer: 'Kavya Reddy', time: 'Mon, Wed, Fri — 6:00 PM', duration: '60 min', level: 'Beginner', capacity: 40, enrolled: 32, price: '₹599/session', rating: 4.7, color: '#e91e63', image: 'dance', description: 'Dance your way to fitness with Latin-inspired moves. Fun, energetic, and effective!' },
    { name: 'MMA Training', category: 'Combat', trainer: 'Arun Desai', time: 'Tue, Thu — 7:00 PM', duration: '90 min', level: 'Intermediate', capacity: 15, enrolled: 10, price: '₹1,749/session', rating: 4.9, color: '#34495e', image: 'mma', description: 'Mixed martial arts training combining striking, grappling, and ground techniques.' },
    { name: 'Pilates Core', category: 'Yoga', trainer: 'Divya Nair', time: 'Mon, Wed, Fri — 9:00 AM', duration: '60 min', level: 'All Levels', capacity: 20, enrolled: 15, price: '₹999/session', rating: 4.8, color: '#8e44ad', image: 'pilates', description: 'Strengthen your core, improve posture, and enhance body awareness with controlled Pilates movements.' },
    { name: 'Recovery & Stretch', category: 'Recovery', trainer: 'Dr. Meera Gupta', time: 'Daily — 12:00 PM', duration: '45 min', level: 'All Levels', capacity: 25, enrolled: 10, price: '₹499/session', rating: 4.9, color: '#3498db', image: 'recovery', description: 'Guided stretching, foam rolling, and recovery techniques to reduce soreness and prevent injury.' },
    { name: 'Olympic Weightlifting', category: 'Strength', trainer: 'Sanjay Sharma', time: 'Mon, Wed, Fri — 4:00 PM', duration: '90 min', level: 'Advanced', capacity: 10, enrolled: 8, price: '₹1,999/session', rating: 5.0, color: '#c0392b', image: 'weightlifting', description: 'Master the snatch and clean & jerk with expert coaching. Competition prep available.' },
    { name: 'Aerial Yoga', category: 'Yoga', trainer: 'Riya Bhat', time: 'Sat, Sun — 10:00 AM', duration: '75 min', level: 'Intermediate', capacity: 12, enrolled: 9, price: '₹1,249/session', rating: 4.8, color: '#16a085', image: 'aerial', description: 'Experience yoga from a new perspective using aerial hammocks. Decompresses spine and builds strength.' },
  ];

  const filtered = activeFilter === 'All' ? classes : classes.filter(c => c.category === activeFilter);

  const schedule = [
    { time: '5:00 AM', mon: 'Open Gym', tue: 'Open Gym', wed: 'Open Gym', thu: 'Open Gym', fri: 'Open Gym', sat: 'Open Gym', sun: '-' },
    { time: '6:00 AM', mon: 'Strength', tue: 'HIIT', wed: 'Strength', thu: 'HIIT', fri: 'Strength', sat: 'CrossFit', sun: '-' },
    { time: '7:00 AM', mon: 'Spin', tue: 'Spin', wed: 'Zumba', thu: 'Spin', fri: 'Zumba', sat: 'Spin', sun: 'Yoga' },
    { time: '8:00 AM', mon: 'Yoga', tue: 'Yoga', wed: 'Yoga', thu: 'Yoga', fri: 'Yoga', sat: 'Yoga', sun: 'Yoga' },
    { time: '9:00 AM', mon: 'Pilates', tue: 'Recovery', wed: 'Pilates', thu: 'Recovery', fri: 'Pilates', sat: 'Aerial Yoga', sun: 'Aerial Yoga' },
    { time: '5:30 PM', mon: 'Boxing', tue: 'MMA', wed: 'Boxing', thu: 'MMA', fri: 'Boxing', sat: '-', sun: '-' },
    { time: '6:00 PM', mon: 'Zumba', tue: 'Strength', wed: 'Zumba', thu: 'Strength', fri: 'Zumba', sat: '-', sun: '-' },
  ];

  return (
    <div className="classes-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="section-tag"><Zap size={14} /> Our Classes</div>
            <h1 className="page-hero-title">FITNESS <span>CLASSES</span></h1>
            <p className="page-hero-desc">
              Over 50 weekly classes led by certified trainers. Find the perfect workout for your goals.
            </p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <span>Classes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Classes */}
      <section className="section classes-list-section">
        <div className="container">
          <div className="classes-filter">
            <Filter size={18} />
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="classes-grid">
            {filtered.map((cls, i) => (
              <div key={i} className="class-card">
                <div className="class-card-header">
                  <div className="class-card-image" style={{ backgroundImage: `linear-gradient(135deg, ${cls.color}ff 0%, ${cls.color}cc 100%)`, backgroundSize: 'cover' }}></div>
                  <div className="class-card-badges">
                    <span className="class-card-level">{cls.level}</span>
                    <span className="class-card-rating"><Star size={12} fill="#ffd166" color="#ffd166" /> {cls.rating}</span>
                  </div>
                </div>
                <div className="class-card-body">
                  <span className="class-card-category">{cls.category}</span>
                  <h3>{cls.name}</h3>
                  <p>{cls.description}</p>
                  <div className="class-card-meta">
                    <span><Users size={14} /> {cls.trainer}</span>
                    <span><Clock size={14} /> {cls.duration}</span>
                    <span><Calendar size={14} /> {cls.time}</span>
                  </div>
                  <div className="class-card-footer">
                    <div className="class-card-price">{cls.price}</div>
                    <div className="class-card-capacity">
                      <div className="capacity-bar">
                        <div className="capacity-fill" style={{ width: `${(cls.enrolled / cls.capacity) * 100}%` }}></div>
                      </div>
                      <span>{cls.capacity - cls.enrolled} spots left</span>
                    </div>
                  </div>
                  <Link to="/join" className="btn btn-outline btn-sm" style={{ width: '100%', marginTop: '12px' }}>
                    Book This Class
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="section schedule-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag"><Calendar size={14} /> Weekly Schedule</div>
            <h2 className="section-title">CLASS <span>TIMETABLE</span></h2>
          </div>
          <div className="schedule-table-wrap">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                  <th>Sun</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <tr key={i}>
                    <td className="schedule-time">{row.time}</td>
                    <td>{row.mon}</td>
                    <td>{row.tue}</td>
                    <td>{row.wed}</td>
                    <td>{row.thu}</td>
                    <td>{row.fri}</td>
                    <td>{row.sat}</td>
                    <td>{row.sun}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClassesPage;