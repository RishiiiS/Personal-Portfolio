import React from 'react';
import ProfileCard from './components/ProfileCard';
import AboutMe from './components/AboutMe';
import FeaturedProjects from './components/FeaturedProjects';
import EducationExperience from './components/EducationExperience';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <ProfileCard />
            <AboutMe />
            <FeaturedProjects />
            <EducationExperience />
        </div>
    );
}

export default App;
