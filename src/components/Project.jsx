import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
    const [projects, setProjects] = useState([]);
     
    useEffect(() => {
        fetch('/project.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])

    return (
        <section id='projects' className=" py-16 bg-white">
            {/* content */}
            <div className='text-center px-4'>
                <h2 className="text-3xl md:text-4xlfont-bold text-info mb-4">My Projects</h2>
                <p className="text-secondary  max-w-xl mx-auto">
                    A showcase of my web development projects that highlight my skills in design, functionality, and creativity. Explore and experience the craftsmanship behind each project.
                </p>
            </div>
            {/* project card */}
            <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-8 bg-white">
                {
                    projects.map(project => <div
                        key={project.id}
                        className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                      >
                        <img
                          src={project.image}
                          alt={project.projectName}
                          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                          <h3 className="text-white text-center text-xl font-semibold mb-4">
                            {project.projectName}
                          </h3>
                          <Link
                            to={`/projects/${project.id}`}
                            className="px-4 py-2 bg-info text-white font-medium rounded hover:bg-orange-500 transition-colors"
                          >
                            View More
                          </Link>
                        </div>
                      </div>)
                }
            </div>
      </section>
      
    );
};

export default Project;