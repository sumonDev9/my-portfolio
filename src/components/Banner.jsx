import { BsGithub } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    return (
    <div id="home" className=" pt-20 relative overflow-hidden bg-cover" 
    >
      <div className=" container gap-4 mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-6/12 w-11/12 mx-auto">
          <div className="  flex flex-col gap-2">
            <h3 className="text-primary text-xl lg:text-3xl">
              <Typewriter
                words={["Hi, I’m Sumon Mitra"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={7000}
              />
            </h3>
            <h1 className=" text-primary font-bold text-2xl lg:text-4xl xl:text-5xl">
            a <span className="text-info">Frontend Developer</span>
            </h1>
            <p className=" text-sm lg:text-lg text-secondary text-justify md:text-start 2xl:text-justify">{`
            I am a dedicated Frontend Developer with a passion for crafting visually appealing and user-friendly web applications. With expertise in modern web technologies and a keen eye for design, I strive to deliver seamless digital experiences that resonate with users.
            
            `}</p>
            {/* socal links  */}
            <div className=" mt-2  flex  items-center gap-2">
              <button className="btn btn-circle bg-gray-300 hover:bg-info hover:text-white">
              <Link
                to="https://github.com/sumonDev9"
                target="_blank"
                className=" text-2xl"
              >
                <BsGithub />
              </Link>
              </button>
             <button className="btn btn-circle bg-gray-300 hover:bg-info hover:text-white">
             <Link
                to="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"
                target="_blank"
                className=" text-2xl"
              >
                <FaLinkedin />
              </Link>
             </button>
              <button className="btn btn-circle bg-gray-300 hover:bg-info hover:text-white">
              <Link
                to="https://www.facebook.com/kiron8391"
                target="_blank"
                className=" text-2xl "
              >
                <FaFacebook />
              </Link>
              </button>
            
            </div>
            {/* btns  */}
            <div className="mt-3">
            <button>
               <a
                       href="/SumonMitra-CV.pdf"
                       download
                       className="bg-[#FD6E0A] flex items-center gap-2 text-white px-2 py-2 md:px-6 md:py-3 rounded-lg shadow-lg text-sm md:text-base font-medium hover:bg-[#f0761f]">
                      <GoDownload  className="text-lg font-medium text-white"/> Download CV
                   </a>
               </button>
            </div>
          </div>
        </div>
        <div className=" md:w-5/12">
          <img
            className=" drop-shadow-md text-primary-color w-full "
            src="https://i.imgur.com/g7rfLhs.png"
            alt=""
          />
        </div>
      </div>

      <div className=" h-96 w-96 bg-primary-color bg-opacity-60 rounded-full absolute -z-10 blur-3xl top-4 right-1/2 "></div>
    </div>
    );
};

export default Banner;