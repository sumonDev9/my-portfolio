import React, { useEffect, useState } from 'react';

const Skills = () => {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('/skills.json')
        .then(res => res.json())
        .then(data => setSkills(data))

    },[])

    return (
   <section className='bg-gray-100 py-10 md:py-20'>
            <div className='w-11/12 mx-auto'>
        <div className='text-center mb-6'>
            <h1 className='text-info text-4xl font-bold'>Skills</h1>
            <p className='text-secondary text-base md:text-lg'>Technologies and tools I specialize in to build efficient and modern web applications.</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3'>
         {
            skills.map(skill => <div skill={skill.id}>
                    
            <div className='group relative flex flex-col justify-center items-center bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:bg-orange-50 transition-all duration-300'>
            <div className='relative'>
                <img 
                    src={skill.icon} 
                    alt="HTML Icon" 
                    className='w-16 h-16 transform group-hover:scale-110 transition-transform duration-300'
                />
                {/* <div className='absolute -top-3 -right-3 h-6 w-6 bg-orange-500 rounded-full text-white text-sm flex items-center justify-center shadow-md'>
                    <span className='font-bold'>{skill.firstN}</span>
                </div> */}
            </div>
            <span className='mt-4 text-primary font-semibold text-lg'>{skill.name}</span>
           
        </div>
            </div>)
         }
        </div>
    </div>
   </section>
    
    );
};

export default Skills;