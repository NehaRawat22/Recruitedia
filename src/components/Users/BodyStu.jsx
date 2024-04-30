import React from "react";
import "../BodySec/Body.css";
import StuTop from '../Users/StuTop';
import StuList from "../Users/StuList";
import Profile from "../Users/Profile";

const BodyStu = () => {
  return (
    <div className="mainContent">
      <StuTop/>
      <div className="bottomer flexer">
        <StuList />
        <Profile />
      </div>
    </div>
  )
}

export default BodyStu
