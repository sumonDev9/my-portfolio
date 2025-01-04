import React from 'react';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills.JSX';
import Education from '../components/Education';
import Project from '../components/Project';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;