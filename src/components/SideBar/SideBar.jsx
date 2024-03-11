import "./SideBar.css";
import logo from "../../assets/logo.png";
import { IoMdSpeedometer } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";
import { GoOrganization } from "react-icons/go";
import { FaAward } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sideBar grider">
      <div className="logoDiv flexer">
        <img src={logo} alt="" className="iconn" />
        <h2>Recruitedia</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>
        <ul className="menuLists grider">
          <li className="listItem">
            <Link to="/dashboard" className="menuLink flexer">
              <IoMdSpeedometer className="iconn" />
              <span className="smallText">Dashboard</span>
            </Link>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flexer">
              <PiStudentFill className="iconn" />
              <span className="smallText">Search Students</span>
            </a>
          </li>

          <li className="listItem">
            <Link to="/departments" className="menuLink flexer">
              <GoOrganization className="iconn" />
              <span className="smallText">Departments</span>
            </Link>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flexer">
              <FaAward className="iconn" />
              <span className="smallText">Placed Students</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">SETTINGS</h3>
        <ul className="menuLists grider">


          <li className="listItem">
            <a href="#" className="menuLink flexer">
              <FaArrowTrendUp className="iconn" />
              <span className="smallText">Trending</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flexer">
              <IoIosContacts className="iconn" />
              <span className="smallText">Contact</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flexer">
              <SlCalender className="iconn" />
              <span className="smallText">Calender</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <FaRegCircleQuestion className="iconn" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Help Center</h3>
          <p>
            Having trouble in Recruitedia, please contact us for more questions
          </p>
          <button className="btnn">Go to help center</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
