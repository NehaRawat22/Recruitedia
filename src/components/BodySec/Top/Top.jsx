import React from "react";
import "./Top.css";
import { IoIosLogOut } from "react-icons/io";
import img from "../../../assets/pic.jpg";
import tech from "../../../assets/tech.mp4";
import { BsArrowRightShort } from "react-icons/bs";
import side from "../../../assets/side.webp";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flexer">
        <div className="titler">
          <h1>Welcome to Admin Dashboard</h1>
          <p>Hello Admin1, Welcome back</p>
        </div>

        <div className="adminDiv flexer">
          <div className="adminImage">
            <img src={img} alt="" />
          </div>
          <Link to='/'>
          <IoIosLogOut className="iconn" />
          </Link>
          
        </div>
      </div>

      <div className="cardSection flexer">
        <div className="rightCard flexer">
          <h1>Acquiring right talent is the key to growth</h1>
          <p>Hiring was - and still is - the most important thing we do!</p>
          <div className="btnns flexer">
            <button className="btnn">Explore News</button>
            <Link to='/jobs' className="btnn transparentt">Add Feed</Link>
            
          </div>
          <div className="videoDiv">
            <video src={tech} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flexer">
          <div className="mains flexer">
            <div className="textDiv">
              <h1>College Stats</h1>

              <div className="flexer">
                <span>
                  Today <br /> <small>2 Drives</small>
                </span>
                <span>
                  This month <br /> <small>13 Drives</small>
                </span>
              </div>

              <span className="linker flexer">
                Go to recent drives <BsArrowRightShort className="iconn" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={side} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
