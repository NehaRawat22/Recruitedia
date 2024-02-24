import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="md:px-14 p-4 max-w-screen-2xl mx-auto mt-20" id="home">
        <div className="gradientBg rounded-xl py-34">
          <div className="flex md:flex-row-reverse justify-between items-center gap-10">
            <div className="pt-60 flex justify-center"></div>
            <motion.div 
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true, amount:0.7}}
            className="md:w-3.5/5">
              <h2 className="head md:text-6xl text-4xl font-bold text-white leading-relaxed py-20 px-5">
                Welcome to Career Development Cell
              </h2>
              <h3 className="flex items-center text-3xl font-small text-neutral-200 mx-10">
                Hiring Made
                <span className="relative ml-3 h-[1em] w-36 overflow-hidden">
                  <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-blue [animation-delay:1.7s]">
                    Easier
                  </span>
                  <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-blue [animation-delay:2.5s]">
                    Better
                  </span>
                  <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-blue [animation-delay:3.3s]">
                    Fine
                  </span>
                </span>
              </h3>

              <div>
                <Link to="/login">
                <button className="py-12">
                  <a
                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-700 rounded-xl group"
                  >
                    <span className="absolute top-0 right-0 inline-block w-6 h-6 transition-all duration-500 ease-in-out bg-blue-900 rounded group-hover:-mr-4 group-hover:-mt-4">
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-800 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-xl">
                      Administrator
                    </span>
                  </a>
                </button>
                </Link>
                <Link to="/login">
                <button className="px-3">
                  <a
                    className="relative inline-flex items-center justify-start px-7 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-xl group"
                  >
                    <span className="absolute top-0 right-0 inline-block w-6 h-6 transition-all duration-500 ease-in-out bg-blue-800 rounded group-hover:-mr-4 group-hover:-mt-4">
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-700 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-xl">
                      Student
                    </span>
                  </a>
                </button>
                </Link>
              </div>
            </motion.div>
          </div>
          <svg
            viewBox="0 0 1400 174"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-2.000000, 44.000000)"
                fill="#FFFFFF"
                fillRule="nonzero"
              >
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
                  id="Path-4"
                  opacity="0.200000003"
                ></path>
              </g>
              <g
                transform="translate(-4.000000, 76.000000)"
                fill="#FFFFFF"
                fillRule="nonzero"
              >
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Home;
