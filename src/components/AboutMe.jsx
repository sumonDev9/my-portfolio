import React from 'react';

const AboutMe = () => {
    return (
        <section name='about'>
        <div className="hero py-10 bg-gray-50">
          <div className="hero-content flex flex-col-reverse md:flex-row items-center gap-8">
             {/* Image Section */}
             <div className="w-full md:w-1/2 flex justify-center">
              <img
                className="drop-shadow-md md:max-w-80 rounded-full"
                src="https://i.ibb.co/WkYKyKB/logomitra-removebg-preview.png"
                alt="About Me"
              />
            </div>
            {/* Text Section */}
            <div className="md:w-2/3 md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-info">About Me</h1>
              <p className="mt-4 text-secondary leading-relaxed">
                I am Sumon Mitra, a passionate Frontend Web Developer. My journey into programming began while working at a company, where I was inspired by a colleague's work. That sparked my interest in coding, and since then, I have been dedicated to learning and growing as a developer. I enjoy working with technologies like JavaScript, React, and Tailwind CSS, focusing on creating responsive and interactive user experiences.
              </p>
              <p className="mt-4 text-secondary leading-relaxed">
                Outside of programming, I love traveling, playing cricket, painting, and reading books. These activities keep me mentally refreshed and inspire me to learn new things.
              </p>
              <p className="mt-4 text-secondary leading-relaxed">
                My goal is not just to become a skilled developer but to create something that simplifies and beautifies people's lives. Learning never stops, and I am always ready to discover something new every day.
              </p>
            </div>
      
           
          </div>
        </div>
      </section>
      
    );
};

export default AboutMe;