import brochure from "../assets/pdf.png";
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const Brochure = () => {
  return (
    <>
      <div className="md:px-14 p-4 max-w-screen-2xl mx-auto mt-20" id="brochure">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div 
          variants={fadeIn("top",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:true, amount:0.7}}
          className="md:w-1/5 px-8">
            <img src={brochure} alt="" />
          </motion.div>
          <motion.div 
          variants={fadeIn("down",0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:true, amount:0.7}}
          className="md:w-4/5 px-8">
            <h2 className="md:text-3xl text-2xl font-bold text-primary mb-7 leading-normal">
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
