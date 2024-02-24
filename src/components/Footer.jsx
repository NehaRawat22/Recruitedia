import logo from "../assets/logo.png";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        className="bg-[#010851] max-w-screen-2xl mx-auto text-white"
        id="contact"
      >
        <svg
          className="wave-top"
          viewBox="0 0 1439 147"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
              <g className="wave" fill="#f8fafc">
                <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
              </g>
              <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                  <path
                    d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                    opacity="0.200000003"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <div className="my-12 px-14 flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 space-y-8">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3 text-primary"
            >
              <img
                src={logo}
                alt=""
                className="invert w-10 inline-block items-center"
              />
              <span className="text-white">Recruitedia</span>
            </a>
            <p className="md:w-1/2">
              Hiring people is an art, not a science. And resumes can't tell you
              whether someone will fit into a company's culture
            </p>
            <div>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Your Query"
                className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
              />
              <input
                type="submit"
                value="Submit"
                className="px-4 py-2 bg-blue-700 rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all"
              />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
            <div className="space-y-4 mt-5">
              <h4 className="text-xl">Platform</h4>
              <ul className="space-y-3">
                <a href="/" className="block hover:text-gray-300">
                  Overview
                </a>
                <a href="/" className="block hover:text-gray-300">
                  About
                </a>
                <a href="/" className="block hover:text-gray-300">
                  Brochure
                </a>
                <a href="/" className="block hover:text-gray-300">
                  Contact Us
                </a>
              </ul>
            </div>
            <div className="space-y-4 mt-5">
              <h4 className="text-xl">Help</h4>
              <ul className="space-y-3">
                <Link to="/faq" className="block hover:text-gray-300">
                  How does it works?
                </Link>
                <Link to="/faq" className="block hover:text-gray-300">
                  Where to ask questions?
                </Link>
                <Link to="/faq" className="block hover:text-gray-300">
                  How to create?
                </Link>
                <Link to="/faq" className="block hover:text-gray-300">
                  What is needed for this?
                </Link>
              </ul>
            </div>
            <div className="space-y-4 mt-5">
              <h4 className="text-xl">Contact</h4>
              <ul className="space-y-3">
                <p href="/" className="hover:text-gray-300">
                  (012) 1234-567-890
                </p>
                <p href="/" className="hover:text-gray-300">
                  querymsg@gmail.com
                </p>
                <p href="/" className="hover:text-gray-300">
                  +91 7531234567
                </p>
                <p href="/" className="hover:text-gray-300">
                  045794
                </p>
              </ul>
            </div>
          </div>
        </div>

        <hr />
        <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between px-14 py-5">
          <p>@XYZ 2023 ---- 24. All rights reserved. </p>
          <div className="flex items-center space-x-5">
            <ImFacebook2 className="w-12 h-7 cursor-pointer hover:-translate-y-4 transition-ease-all duration-300" />
            <FaLinkedin className="w-12 h-7 cursor-pointer hover:-translate-y-4 transition-ease-all duration-300" />
            <FaInstagram className="w-12 h-7 cursor-pointer hover:-translate-y-4 transition-ease-all duration-300" />
            <FaTwitter className="w-12 h-7 cursor-pointer hover:-translate-y-4 transition-ease-all duration-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
