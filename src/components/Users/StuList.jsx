import React from "react";
import "../BodySec/Listing/Listing.css";

import drive1 from "../../assets/company1.png";
import drive2 from "../../assets/company3.png";
import drive3 from "../../assets/dell.png";
import drive4 from "../../assets/infosys.webp";
import drive5 from "../../assets/company4.webp";
import drive6 from "../../assets/accenture.png";
import drive7 from "../../assets/company2.webp";
import { BsArrowRightShort } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="headings flexer">
        <h1>Upcoming Drives</h1>
        <Link to="/stuexplore">
          <button className="btnn flexer">
            See All <BsArrowRightShort className="iconn" />
          </button>
        </Link>
      </div>

      <div className="secContainer flexer">
        <div className="singleItem">
          <IoIosStar className="iconn" />
          <img src={drive1} alt="" />
          <h3>Wipro On-campus Drive</h3>
        </div>

        <div className="singleItem">
          <IoStarOutline className="iconn" />
          <img src={drive2} alt="" />
          <h3>TCS On-campus Drive</h3>
        </div>

        <div className="singleItem">
          <IoStarOutline className="iconn" />
          <img src={drive3} alt="" />
          <h3>DELL On-campus Drive</h3>
        </div>

        <div className="singleItem">
          <IoIosStar className="iconn" />
          <img src={drive4} alt="" />
          <h3>Infosys On-campus Drive</h3>
        </div>
      </div>

      <div className="company flexer">
        <div className="topCompanies">
          <div className="headings flexer">
            <h3>Top Recruiters</h3>
            <Link to="/sturecent">
              <button className="btnn flexer">
                See All <BsArrowRightShort className="iconn" />
              </button>
            </Link>
          </div>

          <div className="cards flexer">
            <div className="recruiters">
              <img src={drive2} alt="" />
              <img src={drive1} alt="" />
              <img src={drive5} alt="" />
              <img src={drive3} alt="" />
            </div>
            <div className="cardText">
              <span>
                90 Students placed <br />
                <small>
                  24 Companies <br /> <span className="dates">4 Months</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="pastCompanies">
          <div className="headings flexer">
            <h3>Past Recruiters</h3>
            <Link to="/recent">
              <button className="btnn flexer">
                See All <BsArrowRightShort className="iconn" />
              </button>
            </Link>
          </div>

          <div className="cards flexer">
            <div className="recruiters">
              <img src={drive6} alt="" />
              <img src={drive5} alt="" />
              <img src={drive7} alt="" />
              <img src={drive4} alt="" />
            </div>
            <div className="cardText">
              <span>
                200 Students placed <br />
                <small>
                  40 Companies <br />
                  <span className="dates">10 Months</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
