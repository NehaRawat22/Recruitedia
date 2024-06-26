import React from "react";
import "./Explore.css";
import company1 from "../../assets/company1.png";
import company2 from "../../assets/company2.webp";
import company3 from "../../assets/company3.png";
import company4 from "../../assets/dell.png";
import company5 from "../../assets/accenture.png";
import company6 from "../../assets/infosys.webp";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <>
      <div className="mainContent">
        <h2 className="titler">Recent Drives</h2>
        <ul className="cardss">
          <li>
            <Link to="/desc1" className="card">
              <img src={company1} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img className="card__thumb" src={company1} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">Wipro</h3>
                    <span className="card__status">2 days ago</span>
                  </div>
                </div>
                <p className="card__description">
                  Role: Software Engineer <br />
                  Eligibility: CSE/EE/MCA <br />
                  Salary Package: 6 LPA
                  <br />
                  Interview date to be announced
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/desc2" className="card">
              <img src={company2} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img className="card__thumb" src={company2} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">Tech Mahindra</h3>
                    <span className="card__status">07/12/2023</span>
                  </div>
                </div>
                <p className="card__description">
                  Role: SDE <br />
                  Eligibility: CSE/EE <br />
                  Salary Package: 4.8 LPA
                  <br />
                  12 students got placed
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/desc3" className="card">
              <img src={company3} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img className="card__thumb" src={company3} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">TCS</h3>
                    <span className="card__status">1 hour ago</span>
                  </div>
                </div>
                <p className="card__description">
                  Role: Software Developer <br />
                  Eligibility: BTech,CSE,EE & MCA <br />
                  Salary Package: 5.5 LPA
                  <br />
                  PPT had been conducted in the morning
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/desc4" className="card">
              <img src={company4} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img className="card__thumb" src={company4} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">Dell</h3>
                    <span className="card__status">09/05/2024</span>
                  </div>
                </div>
                <p className="card__description">
                  Role: BDE <br />
                  Eligibility: BTech CSE,EE,ME <br />
                  Salary Package: 3.3 LPA
                  <br />
                  To be held in few days
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/desc5" className="card">
              <img src={company5} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img className="card__thumb" src={company5} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">Accenture</h3>
                    <span className="card__status">29/05/2024</span>
                  </div>
                </div>
                <p className="card__description">
                  Role: ASE <br />
                  Eligibility: BTech CSE,EE,MCA <br />
                  Salary Package: 4.8 LPA
                  <br />
                  To be held in few days
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/desc6" className="card">
              <img src={company6} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img className="card__thumb" src={company6} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">Infosys</h3>
                    <span className="card__status">13/06/2024</span>
                  </div>
                </div>
                <p className="card__description">
                  Role: Software Engineer
                  <br />
                  Eligibility: BTech CSE,EE,ME,MCA <br />
                  Salary Package: 5.2 LPA
                  <br />
                  To be held in few days
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Explore;
