import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Award, Instagram, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';
import './TrainersPage.css';

const TrainersPage = () => {
  const trainers = [
    { name: 'Rohit Kumar', role: 'Strength & Conditioning Coach', color: '#ff6b6b', rating: 4.9, reviews: 342, experience: '12 years', certifications: ['ISSA-CSCS', 'NASM-CPT', 'CrossFit L3'], specialties: ['Powerlifting', 'Bodybuilding', 'Sports Performance'], bio: 'Former national weightlifting champion turned elite strength coach. Rohit has helped hundreds of clients from beginners to pro athletes achieve their strength goals in India.', clients: 500, achievements: 'India National Powerlifting Champion 2018, Certified Strength Specialist' },
    { name: 'Priya Verma', role: 'HIIT & Cardio Specialist', color: '#ff8c42', rating: 4.8, reviews: 289, experience: '10 years', certifications: ['ACE-CPT', 'Les Mills Certified', 'TRX Certified'], specialties: ['HIIT', 'Metabolic Conditioning', 'Weight Loss'], bio: 'Priya is known for her high-energy bootcamp classes that deliver results fast. Her training programs have a 95% client satisfaction rate across Delhi-NCR.', clients: 800, achievements: 'Best Fitness Instructor Award 2022, Published Author on Indian Fitness' },
    { name: 'Anjali Kapoor', role: 'Yoga & Mindfulness Expert', color: '#9d84b7', rating: 4.9, reviews: 456, experience: '15 years', certifications: ['RYT-500', 'Yoga Alliance', 'Mindfulness Coach'], specialties: ['Vinyasa', 'Ashtanga', 'Meditation', 'Prenatal Yoga'], bio: 'Anjali trained extensively in Rishikesh and brings authentic yoga traditions combined with modern sports science to every session. Featured in Indian wellness magazines.', clients: 1200, achievements: 'International Yoga Day Ambassador, Wellness Expert Speaker' },
    { name: 'Vikram Singh', role: 'Boxing & MMA Trainer', color: '#2d3436', rating: 4.9, reviews: 198, experience: '14 years', certifications: ['Amateur Boxing Federation Coach', 'NASM-CPT', 'First Aid'], specialties: ['Boxing', 'MMA', 'Self-Defense', 'Fight Prep'], bio: 'Former national-level boxer trained in elite Indian boxing clubs. Vikram brings fight-proven techniques to every training session, whether you\'re competing or just getting fit.', clients: 350, achievements: 'Delhi State Boxing Champion 2015, Pro Record 23-5' },
    { name: 'Dr. Meera Gupta', role: 'Sports Rehabilitation Specialist', color: '#3498db', rating: 5.0, reviews: 312, experience: '11 years', certifications: ['DPT', 'CSCS', 'FMS Certified'], specialties: ['Injury Recovery', 'Corrective Exercise', 'Mobility'], bio: 'Doctor of Physical Therapy specializing in sports injuries and rehabilitation. Dr. Meera ensures you train safely and recover properly with science-backed methods.', clients: 650, achievements: 'Consulting Physiotherapist for Indian Sports Clubs (2019-2021)' },
    { name: 'Arjun Patel', role: 'CrossFit Head Coach', color: '#e74c3c', rating: 4.8, reviews: 267, experience: '9 years', certifications: ['CrossFit L4', 'USAW', 'NASM-PES'], specialties: ['CrossFit', 'Olympic Lifting', 'Competition Prep'], bio: 'CrossFit regional competitor and certified level 4 coach. Arjun\'s programming is intelligent, scalable, and has produced multiple competition qualifiers.', clients: 400, achievements: 'CrossFit Asia Regional Qualifier 2017-2021' },
    { name: 'Neha Chopra', role: 'Indoor Cycling Instructor', color: '#f39c12', rating: 4.7, reviews: 234, experience: '8 years', certifications: ['Spinning Certified', 'ACE-GFI', 'CPR/AED'], specialties: ['Spin Classes', 'Endurance Training', 'Weight Management'], bio: 'Neha\'s spin classes are legendary in Noida — always packed. Her coaching style combines high-energy motivation, great Bollywood and global music, and science-based intervals.', clients: 900, achievements: 'Best Spin Instructor - Indian Fitness Awards 2023' },
    { name: 'Kavya Reddy', role: 'Zumba & Dance Fitness', color: '#e91e63', rating: 4.7, reviews: 189, experience: '7 years', certifications: ['Zumba Licensed', 'AFAA-GFI', 'Dance Education'], specialties: ['Zumba', 'Latin Dance', 'Bollywood Dance Cardio'], bio: 'Professional dancer with Bollywood background turned fitness instructor. Kavya makes every class feel like a celebration while delivering serious calorie burns and fitness results.', clients: 700, achievements: 'Zumba Instructor Network Gold Status, Fusion Dance Creator' },
  ];

  return (
    <div className="trainers-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="section-tag"><Users size={14} /> Our Trainers</div>
            <h1 className="page-hero-title">EXPERT <span>TRAINERS</span></h1>
            <p className="page-hero-desc">
              Meet our team of certified professionals dedicated to helping you achieve your fitness goals.
            </p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <span>Trainers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section trainers-list-section">
        <div className="container">
          <div className="trainers-grid">
            {trainers.map((trainer, i) => (
              <div key={i} className="trainer-card">
                <div className="trainer-card-top">
                  <div className="trainer-avatar-lg" style={{ backgroundImage: `linear-gradient(135deg, ${trainer.color}ff 0%, ${trainer.color}cc 100%)` }}></div>
                  <div className="trainer-rating-badge">
                    <Star size={14} fill="#ffd166" color="#ffd166" /> {trainer.rating}
                  </div>
                </div>
                <div className="trainer-card-body">
                  <h3>{trainer.name}</h3>
                  <span className="trainer-role-tag">{trainer.role}</span>
                  <p className="trainer-bio">{trainer.bio}</p>

                  <div className="trainer-details">
                    <div className="trainer-detail">
                      <span className="detail-label">Experience</span>
                      <span className="detail-value">{trainer.experience}</span>
                    </div>
                    <div className="trainer-detail">
                      <span className="detail-label">Clients Trained</span>
                      <span className="detail-value">{trainer.clients}+</span>
                    </div>
                    <div className="trainer-detail">
                      <span className="detail-label">Reviews</span>
                      <span className="detail-value">{trainer.reviews}</span>
                    </div>
                  </div>

                  <div className="trainer-specialties">
                    {trainer.specialties.map((s, si) => (
                      <span key={si} className="specialty-tag">{s}</span>
                    ))}
                  </div>

                  <div className="trainer-certs">
                    <span className="certs-label">Certifications:</span>
                    {trainer.certifications.join(' • ')}
                  </div>

                  <p className="trainer-achievement">
                    <Award size={14} /> {trainer.achievements}
                  </p>

                  <div className="trainer-socials">
                    <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
                    <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
                    <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
                    <a href="#" aria-label="Email"><Mail size={16} /></a>
                  </div>

                  <Link to="/join" className="btn btn-outline btn-sm" style={{ width: '100%', marginTop: '16px' }}>
                    Book Session
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="trainers-cta">
        <div className="container">
          <div className="about-cta-content">
            <h2>WANT TO JOIN OUR <span>TRAINING TEAM</span>?</h2>
            <p>We're always looking for passionate, certified fitness professionals.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Apply Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainersPage;