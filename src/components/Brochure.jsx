import brochure from "../assets/pdf.webp";
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const Brochure = () => {
  return (
    <>
      <div className="md:px-14 p-4 max-w-s mx-auto" id="brochure">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div 
          variants={fadeIn("right",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
          className="md:w-1/2">
            <img src={brochure} alt="" />
          </motion.div>
          <motion.div 
          variants={fadeIn("left",0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
          className="md:w-4/5 px-7">
            <h2 className="md:text-4xl text-3xl font-bold text-primary mb-5 leading-normal">
              Download Institute Brochure Online From Here{" "}
              <span className="text-blue-700">in PDF Format</span>
            </h2>
            <p className="text-tertiary text-lg mb-7">
              Placement Policies are listed in this document for circulating the
              procedure of placement in our institute. All students eligible for
              On-campus/Pool campus/ Off campus jobs have to register themselves
              for the placement of the current session with the Placement Cell
              of the Carrier Development Cell first.
            </p>
            <button className="py-3 px-8 bg-blue-700 font-semibold text-white rounded hover:bg-primary transition-all duration-2s">
              Brochure
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Brochure;
