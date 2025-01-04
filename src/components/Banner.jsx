import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { GoDownload } from "react-icons/go";

const Banner = () => {
    return (
        <div className=" bg-gray-100 pt-24 md:pt-32 p-10 flex md:items-center md:justify-center ">
        <div className="mx-auto w-11/12 flex flex-col lg:flex-row  items-start justify-between gap-10">
            {/* Left Section */}
            <div className="lg:w-1/2 text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                I’m <span className="text-info">Sumon Mitra</span>
                </h1>
                <p className="mt-4 text-xl md:text-4xl font-bold text-primary">
                  a Frontend Developer
                </p>
                <p className="mt-4 text-secondary">
                    Passionate about creating visually appealing and user-friendly web applications using the latest technologies.
                </p>
                {/* cv download */}
                <div className="mt-6">
                <button>
                <a
                        href="/SumonMitra-CV.pdf"
                        download
                        className="bg-[#FD6E0A] flex items-center gap-2 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-medium hover:bg-[#f0761f]"
                    >
                       <GoDownload  className="text-lg font-medium text-white"/> Download CV
                    </a>
                </button>
                </div>

                {/* social icon link */}
                <div className="mt-6 flex justify-start gap-3 text-gray-600">
                 <button className="btn btn-circle bg-gray-300 hover:bg-info hover:text-white">
                 <a
                        href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl"
                    >
                        <FaLinkedin />
                    </a>
                 </button>
                <button className="btn btn-circle bg-gray-300 hover:bg-info hover:text-white">
                <a
                        href="https://github.com/sumonDev9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl"
                    >
                        <FaGithub />
                    </a>
                </button>
                    <button className="btn btn-circle bg-gray-300 hover:bg-info hover:text-white">
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl"
                    >
                        <FaTwitter />
                    </a>
                    </button>
                </div>
               
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative  w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg border-4 border-[#FD6E0A]">
                    <img
                        src="https://via.placeholder.com/300"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;