import React from 'react';
import { BookOpen, Camera, Scan } from 'lucide-react';
import '../styles/CurrentlyLearning.css';

const CurrentlyLearning = () => {
    return (
        <div className="currently-learning-card">
            <h3 className="learning-title">Currently Learning</h3>

            <div className="learning-list">
                <div className="learning-item">
                    <div className="learning-icon green">
                        <Camera size={20} />
                    </div>
                    <div className="learning-info">
                        <span className="learning-name">OpenCv</span>
                        <span className="learning-progress">Active</span>
                    </div>
                </div>

                <div className="learning-item">
                    <div className="learning-icon purple">
                        <Scan size={20} />
                    </div>
                    <div className="learning-info">
                        <span className="learning-name">Mediapipe</span>
                        <span className="learning-progress">Exploration</span>
                    </div>
                </div>

                <div className="learning-item">
                    <div className="learning-icon blue">
                        <BookOpen size={20} />
                    </div>
                    <div className="learning-info">
                        <span className="learning-name">System Design</span>
                        <span className="learning-progress">Reading</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentlyLearning;
