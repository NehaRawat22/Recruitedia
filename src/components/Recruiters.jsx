import company1 from "../assets/company1.png";
import company2 from "../assets/company2.webp";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.webp";
import company5 from "../assets/company5.webp";

import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const Recruiters = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-bold text-primary mb-2">
          Our Recruiters
        </h2>
        <p className="text-tertiary md:w-2/3 mx-auto px-4">
          Campus recruitment is a strategy for sourcing, engaging and hiring
          young talent for internship and entry-level positions. Campus
          recruitment is typically a tactic for medium- to large-sized companies
          with high-volume recruiting needs, but can range from small efforts.
        </p>

        <motion.div 
        variants={fadeIn("up",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.5}}
        className="grid sm:grid-cols-3 lg:grid-cols-5 gap-10 mt-20 md:w-11/12 mx-auto">
          <img
            src={company1}
            alt=""
            className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl"
          />
          <img
            src={company2}
            alt=""
            className="border py-5 md:px-6 px-4 rounded-lg shadow-3xl"
          />
          <img
            src={company3}
            alt=""
            className="border py-5 md:px-6 px-4 rounded-lg shadow-3xl"
          />
          <img
            src={company4}
            alt=""
            className="border py-11 md:px-6 px-4 rounded-lg shadow-3xl"
          />
          <img
            src={company5}
            alt=""
            className="border py-11 md:px-6 px-4 rounded-lg shadow-3xl"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default Recruiters;
