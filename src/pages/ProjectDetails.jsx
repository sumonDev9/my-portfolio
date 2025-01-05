import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link, ScrollRestoration, useLoaderData, useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams();
    const projectId = parseInt(id);
    const data = useLoaderData();

    const project = data.find(project => project.id === projectId)


    return (
        <div className='pt-10 bg-gray-50'>
      <ScrollRestoration></ScrollRestoration>
            <div className="max-w-7xl  mx-auto px-6 py-12">
      {/* Project Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-primary">{project.projectName}</h2>
        <p className="text-lg text-secondary mt-4">{project.briefDescription}</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href={project.liveURL} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">View Live Project</a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">GitHub Repository</a>
        </div>
      </div>

      {/* Project Image */}
      <div className="relative mb-12">
        <img
          src={project.image}
          alt={project.projectName}
          className="w-full h-80 md:h-96 rounded-lg shadow-lg"
        />
      </div>

      {/* Technology Stack Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-primary mb-4">Technologies Used</h3>
        <div className="flex flex-wrap gap-4">
          {project.mainTechnologyStack.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Challenges Faced Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-primary mb-4">Challenges Faced</h3>
        <ul className="list-disc pl-6 space-y-2">
          {project.projectDetails.challengesFaced.map((challenge, index) => (
            <li key={index} className="text-secondary">{challenge}</li>
          ))}
        </ul>
      </div>

      {/* Improvements Planned Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-primary mb-4">Improvements Planned</h3>
        <ul className="list-disc pl-6 space-y-2">
          {project.projectDetails.improvementsPlanned.map((improvement, index) => (
            <li key={index} className="text-secondary">{improvement}</li>
          ))}
        </ul>
      </div>

      {/* Future Enhancements Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-primary mb-4">Future Enhancements</h3>
        <ul className="list-disc pl-6 space-y-2">
          {project.projectDetails.futureEnhancements.map((enhancement, index) => (
            <li key={index} className="text-secondary">{enhancement}</li>
          ))}
        </ul>
      </div>

      {/* Back to Projects Button */}
      <div className="text-center mt-12">
        <Link to="/">
        <button className="flex items-center gap-3 px-6 py-3 font-semibold text-info bg-button rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-info hover:text-white hover:shadow-xl">
      <GoArrowLeft className="text-xl font-bold" />
      Back to Projects
    </button>
        </Link>
      </div>
    </div>
        </div>
    );
};

export default ProjectDetails;