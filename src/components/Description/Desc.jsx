import React from "react";
import "./Desc.css";

const Desc = (props) => {
  const handleApplyClick = () => {
    const jobDetails = {
      cname: props.cname,
      role: props.role,
      loc: props.loc,
      desc: props.desc,
      eligible: props.eligible,
      sal: props.sal,
      image: props.image,
    };

    props.handleApplyNow(jobDetails);
  };

  return (
    <div className="mainContent">
      <div className="container">
        <div className="imgBx">
          <img src={props.image} alt="" />
        </div>
        <div className="details">
          <div className="content">
            <h2>{props.cname}</h2>
            <p>
              {props.role} - {props.loc}
            </p>
            <p>{props.desc}</p>
            <h5>Eligibility Criteria:</h5>
            <p>{props.eligible}</p>
            <h3>Rs. {props.sal}</h3>
            <button onClick={handleApplyClick}>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desc;
