import { Link as Scrollink } from "react-scroll";


const Navbar = () => {
    const navMenu = <>
    <Scrollink to="home" spy  activeClass={"link-active"}>Home</Scrollink>
    <Scrollink to="about" spy  activeClass={"link-active"}>About</Scrollink>
    <Scrollink to="skills" spy  activeClass={"link-active"}>Skills</Scrollink >
    <Scrollink to="education" spy  activeClass={"link-active"}>Education</Scrollink >
    <Scrollink to="projects" spy  activeClass={"link-active"}>Projects</Scrollink >
    <Scrollink to="contact" spy  activeClass={"link-active"}>Contact</Scrollink >
    </>
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md  shadow-md">
            <div className="navbar w-11/12 -md mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu navlinks menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 space-y-3 shadow">
                            {navMenu}
                        </ul>
                    </div>
                    <a className="text-base md:text-2xl  font-bold">Sumon <span className="text-info">M.</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu navlinks menu-horizontal text-base font-medium text-secondary px-1 gap-4">
                    {navMenu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a
                        href="/Sumon-Mitra-Resume.pdf"
                        download
                        className="bg-[#FD6E0A] btn text-white text-sm md:text-lg hover:bg-[#f0761f]"
                    >
                        Download CV
                    </a>                </div>
            </div>
        </div>
    );
};

export default Navbar;