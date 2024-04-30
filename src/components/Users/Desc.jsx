import React from "react";
import "../UserStyles/Desc.css";

const Desc = (props) => {
    const scheduledProcesses = {
        aptitudeTest: "Jan 10, 10:00 AM",
        technicalInterview: "Jan 12, 2:00 PM",
        hrInterview: "Jan 14, 1:00 PM",
        selection: "Jan 16",
    };

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

        const jobWithSchedule = {
            ...jobDetails,
            schedule: scheduledProcesses,
        };

        props.handleApplyNow(jobWithSchedule);
    };

    return (
        <div className="mainContent">
            <div className="container">
                <div className="imgBx">
                    <img src={props.image} alt="Job" />
                </div>
                <div className="details">
                    <div className="content">
                        <h2>{props.cname}</h2>
                        <p>{props.role} - {props.loc}</p>
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