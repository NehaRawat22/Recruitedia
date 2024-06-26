import React from "react";
import "../UserStyles/Applied.css";

const Applied = ({ appliedJobs, clearAppliedJobs }) => {
  if (!appliedJobs || !Array.isArray(appliedJobs)) {
    return <div>No applied jobs to display.</div>;
  }

  return (
    <div className="mainContent">
    <h2 className="titler">Applied Jobs</h2>
      <div className="applied-containn">
        <ul className="applied-list">
          {appliedJobs.map((job, index) => (
            <li key={index}>
              <h3>{job.cname}</h3>
              <p className="rolee">
                {job.role} - {job.loc}
              </p>
              <p className="sall">Rs. {job.sal}</p>
              <p>{job.desc}</p>
              <p className="eli">Eligibility: {job.eligible}</p>
            </li>
          ))}
        </ul>
        <button className="clear-btn" onClick={clearAppliedJobs}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Applied;
