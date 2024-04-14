import React from "react";
import "./StuTop.css";
import "../../BodySec/Top/Top.css";
import { IoIosLogOut } from "react-icons/io";
import img from "../../../assets/pic.jpg";
import tech from "../../../assets/tech.mp4";
import { Link } from "react-router-dom";

const StuTop = () => {
  const text = {
    color: "rgba(1, 8, 81, 1)",
    fontWeight: "600",
    fontSize: "14px",
  };
  return (
    <div className="topSection">
      <div className="headerSection flexer">
        <div className="titler">
          <h1>Welcome to Student Dashboard</h1>
          <p>Hello Student1, Welcome back</p>
        </div>

        <div className="adminDiv flexer">
          <div className="adminImage">
            <img src={img} alt="" />
          </div>
          <Link to="/">
            <IoIosLogOut className="iconn" />
          </Link>
        </div>
      </div>

      <div className="cardSection flexer">
        <div className="rightCard flexer">
          <h1>Acquiring right talent is the key to growth</h1>
          <p>Hiring was - and still is - the most important thing we do!</p>
          <div className="btnns flexer">
            <Link to="/recent" className="btnn">
              Explore News
            </Link>
            <Link to="/explore" className="btnn transparentt">
              Apply
            </Link>
          </div>
          <div className="videoDiv">
            <video src={tech} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flexer">
          <div className="mains flexer">
            <div className="textDiv shad">
              <h1>Stuti Sharma</h1>

              <div className="flexess">
                <span>
                  Contact <br />{" "}
                  <small style={{ ...text }}>stutish1600@gmail.com</small>
                </span>
                <span>
                  MCA <small style={{ ...text }}>Female</small>
                </span>
              </div>
            </div>

            <div className="imgPro">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StuTop;
