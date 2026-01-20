import React from 'react';
import ProfileCard from './components/ProfileCard';
import AboutMe from './components/AboutMe';
import FeaturedProjects from './components/FeaturedProjects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import StatsCard from './components/StatsCard';
import StatusCard from './components/StatusCard';
import CurrentlyLearning from './components/CurrentlyLearning';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <div className="hero-container">
                <ProfileCard />
                <div className="hero-right-column">
                    <StatsCard />
                    <StatusCard />
                </div>
                <CurrentlyLearning />
            </div>

            <AboutMe />
            <FeaturedProjects />
            <Skills />
            {/* <EducationExperience /> */}
            <Achievements />
            <ContactCTA />
            <Footer />
        </div >
    );
}

export default App;
