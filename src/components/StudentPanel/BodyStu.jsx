import React from "react";
import "../BodySec/Body.css";
import StuTop from './ProfileDet/StuTop';
import Listing from "../BodySec/Listing/Listing";
import Profile from "./ProfileDet/Profile";

const BodyStu = () => {
  return (
    <div className="mainContent">
      <StuTop/>
      <div className="bottomer flexer">
        <Listing />
        <Profile />
      </div>
    </div>
  )
}

export default BodyStu
