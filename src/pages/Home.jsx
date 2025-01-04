import React from 'react';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills.JSX';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
        </div>
    );
};

export default Home;