import React from "react";
import "./Activity.css";
import { BsArrowRightShort } from "react-icons/bs";
import student1 from "../../../assets/student1.jpg";
import student2 from "../../../assets/student2.avif";
import student3 from "../../../assets/student3.jpg";
import student4 from "../../../assets/student4.avif";
import admin1 from "../../../assets/pic.jpg";
import { Link } from "react-router-dom";

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="headings flexer">
        <h1>Recent Activities</h1>
        <Link to="/recent">
          <button className="btnn">
            See All <BsArrowRightShort className="iconn" />
          </button>
        </Link>
      </div>

      <div className="secContainer grider">
        <div className="singleStudent flexer">
          <img src={student1} alt="" />
          <div className="stuDetails">
            <span className="name">Aman Vishnoi</span>
            <small>Placed in Wipro</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>

        <div className="singleStudent flexer">
          <img src={student2} alt="" />
          <div className="stuDetails">
            <span className="name">Stuti Sharma</span>
            <small>Has Interview Scheduled Today</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>

        <div className="singleStudent flexer">
          <img src={student3} alt="" />
          <div className="stuDetails">
            <span className="name">Vikram Singh</span>
            <small>Had HR Round Yesterday</small>
          </div>
          <div className="duration">1 day ago</div>
        </div>

        <div className="singleStudent flexer">
          <img src={student4} alt="" />
          <div className="stuDetails">
            <span className="name">Harsh Dayal</span>
            <small>Placed in Cognizant</small>
          </div>
          <div className="duration">3 days ago</div>
        </div>

        <div className="singleStudent flexer">
          <img src={admin1} alt="" />
          <div className="stuDetails">
            <span className="name">Admin_1</span>
            <small>A campus drive is scheduled tommorow</small>
          </div>
          <div className="duration">5 days ago</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
