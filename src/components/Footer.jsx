import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section brand-section">
                    <h3 className="footer-name">Rishi Seth</h3>
                    <p className="footer-bio">
                        Building digital experiences that make a difference. Always learning, always creating.
                    </p>
                    <div className="footer-socials">
                        <a href="https://github.com/RishiiiS" className="footer-social-btn" aria-label="GitHub">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/rishi-seth-044623324/" className="footer-social-btn" aria-label="LinkedIn">
                            <Linkedin size={18} />
                        </a>
                        <a href="mailto:sethrishi@gmail.com" className="footer-social-btn" aria-label="Email">
                            <Mail size={18} />
                        </a>
                    </div>
                </div>

                <div className="footer-section links-section">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-list">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Experience</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="https://github.com/RishiiiS">GitHub</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="copyright">© 2026 Rishi Seth. All rights reserved.</p>
                <p className="made-with">
                    Made with <Heart size={14} className="heart-icon" fill="#ef4444" color="#ef4444" /> and lots of coffee
                </p>
            </div>
        </footer>
    );
};

export default Footer;
