import React from 'react';
import { MapPin, Calendar, Github, Linkedin, Mail, Library, Award } from 'lucide-react';
import '../styles/ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-content">
        <h1 className="profile-name">Rishi Seth</h1>
        <div className="profile-title">
          Creative Developer | UI/UX Enthusiast | Student
        </div>
        
        <div className="profile-meta">
          <div className="meta-item">
            <MapPin size={16} />
            <span>San Francisco, CA</span>
          </div>
          <div className="meta-item">
            <Calendar size={16} />
            <span>Available for internships</span>
          </div>
        </div>
        
        <div className="social-links">
          <a href="#" className="social-btn" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="#" className="social-btn" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#" className="social-btn" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div className="gpa-badge">
        <div className="gpa-score">
          <Award size={18} className="text-blue-400" />
          <span>GPA: 3.8/4.0</span>
        </div>
        <div className="gpa-major">Computer Science</div>
      </div>
    </div>
  );
};

export default ProfileCard;
