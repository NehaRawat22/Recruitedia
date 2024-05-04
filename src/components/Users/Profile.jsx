import React from "react";
import "../BodySec/Activity/Activity.css";
import '../UserStyles/Profile.css';

const Profile = () => {
  return (
    <div className="activitySection">
      <div className="headings flexer">
        <h1>Profile</h1>
      </div>

      <main>
        <ol className="gradient-list">
          <li>College: KNIT, Sultanpur</li>
          <li>Full Name: Stuti Sharma</li>
          <li>Date of Birth: 22/02/2002</li>
          <li>CGPA: 8.64</li>
          <div className="form-rowed submit-btn">
            <button
              className="btnn"
              style={{
                margin: "20px 0",
                width: "100%",
                border: "3px solid rgba(1, 8, 81, 1)",
                background: "rgb(115, 142, 216)",
                color: "white",
              }}
            >
              RESUME
            </button>
          </div>
        </ol>
      </main>
    </div>
  );
};

export default Profile;
