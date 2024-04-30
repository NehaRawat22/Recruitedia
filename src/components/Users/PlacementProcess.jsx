import React from "react";
import "../UserStyles/PlacementProcess.css";

const PlacementProcess = ({ appliedJobs }) => {
  if (!appliedJobs || !Array.isArray(appliedJobs)) {
    return <div>No schedule to display.</div>;
  }

  return (
    <div className="mainContent">
      
      <h2 className="titler">Schedule</h2>
    <div className="schedule-container">
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Aptitude Test</th>
            <th>Technical Interview</th>
            <th>HR Interview</th>
            <th>Selection</th>
          </tr>
        </thead>
        <tbody>
          {appliedJobs.map((job, index) => (
            <tr key={index}>
              <td style={{textAlign:'center'}}>{job.cname}</td>
              <td>{job.schedule.aptitudeTest}</td>
              <td>{job.schedule.technicalInterview}</td>
              <td>{job.schedule.hrInterview}</td>
              <td>{job.schedule.selection}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default PlacementProcess;