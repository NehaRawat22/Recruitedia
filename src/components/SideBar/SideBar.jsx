import "./SideBar.css";
import logo from "../../assets/logo.png";
import { IoIosLogOut } from "react-icons/io";
import { PiSuitcaseSimple } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";
import { GoOrganization } from "react-icons/go";
import { FaAward } from "react-icons/fa6";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <div className="sideBar grider">
      <div className="logoDiv flexer">
        <img src={logo} alt="" className="iconn" />
        <h2>Recruitedia</h2>
      </div>

      <div className="menuDiv">
        <ul className="menuLists grider">
          <li className="listItem">
            <Link to="/dashboard" className="menuLink flexer">
              <PiStudentFill className="iconn" />
              <span className="smallText">Profile</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/jobs" className="menuLink flexer">
              <PiSuitcaseSimple className="iconn" />
              <span className="smallText">{props.job}</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/departments" className="menuLink flexer">
              <GoOrganization className="iconn" />
              <span className="smallText">{props.sched}</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/stu" className="menuLink flexer">
              <FaAward className="iconn" />
              <span className="smallText">{props.apply}</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/" className="menuLink flexer">
              <IoIosLogOut className="iconn" />
              <span className="smallText">Log Out</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <FaRegCircleQuestion className="iconn" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Help</h3>
          <p>
            Having trouble in Recruitedia, please contact us for more questions
          </p>
          <Link to="/faq">
            <button className="btnn">Go to FAQs</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
