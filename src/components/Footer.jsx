import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col text-primary text-sm md:text-base gap-4">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Skills</a>
          <a className="link link-hover">Projects</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
          <button className="btn btn-circle bg-gray-200 hover:bg-info hover:text-white">
              <Link
                to="https://github.com/sumonDev9"
                target="_blank"
                className=" text-2xl"
              >
                <BsGithub />
              </Link>
              </button>
             <button className="btn btn-circle bg-gray-200 hover:bg-info hover:text-white">
             <Link
                to="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"
                target="_blank"
                className=" text-2xl"
              >
                <FaLinkedin />
              </Link>
             </button>
              <button className="btn btn-circle bg-gray-200 hover:bg-info hover:text-white">
              <Link
                to="https://www.facebook.com/kiron8391"
                target="_blank"
                className=" text-2xl "
              >
                <FaFacebook />
              </Link>
              </button>
            
          </div>
        </nav>
        <aside>
          <p className='text-primary'>Copyright © {new Date().getFullYear()} - All right reserved by Sumon Mitra</p>
        </aside>
      </footer>
    );
};

export default Footer;