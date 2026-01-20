import React from 'react';
import { Coffee, Download, Mail } from 'lucide-react';
import '../styles/ContactCTA.css';

const ContactCTA = () => {
    return (
        <div className="contact-cta-container">
            <div className="cta-icon-wrapper">
                <Coffee size={40} strokeWidth={1.5} />
            </div>

            <h2 className="cta-title">Let's Build Something Amazing</h2>

            <p className="cta-description">
                I'm actively seeking internship opportunities for Summer 2026. Let's connect and discuss how I can contribute to your team!
            </p>

            <div className="cta-buttons">
                <a href="#" className="btn-primary">
                    <Download size={18} />
                    <span>Download Resume</span>
                </a>
                <a href="mailto:contact@example.com" className="btn-secondary">
                    <Mail size={18} />
                    <span>Get in Touch</span>
                </a>
            </div>
        </div>
    );
};

export default ContactCTA;
