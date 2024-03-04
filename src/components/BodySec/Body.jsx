import React from "react";
import "./Body.css";
import Top from "../BodySec/Top/Top";
import Listing from "../BodySec/Listing/Listing";
import Activity from "../BodySec/Activity/Activity";

const Body = () => {
  return (
    <div className="mainContent">
      <Top />
      <div className="bottomer flexer">
        <Listing />
        <Activity />
      </div>
    </div>
  );
};

export default Body;
