import React from 'react';
import { MapPin, Calendar, Github, Linkedin, Mail, Library, Award } from 'lucide-react';
import '../styles/ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-content">
        <h1 className="profile-name">Rishi Seth</h1>
        <div className="profile-title">
          Creative Developer | AI & Robotics Enthusiast | Student
        </div>

        <div className="profile-meta">
          <div className="meta-item">
            <MapPin size={16} />
            <span>Pune, India</span>
          </div>
          <div className="meta-item">
            <Calendar size={16} />
            <span>Available for internships</span>
          </div>
        </div>

        <div className="social-links">
          <a href="https://github.com/RishiiiS" className="social-btn" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/rishi-seth-044623324/" className="social-btn" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:sethrishi@gmail.com" className="social-btn" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
