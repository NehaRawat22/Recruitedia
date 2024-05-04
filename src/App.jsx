import "./App.css";
import company1 from "./assets/company1.png";
import company2 from "./assets/company2.webp";
import company3 from "./assets/company3.png";
import company4 from "./assets/dell.png";
import company5 from "./assets/accenture.png";
import company6 from "./assets/infosys.webp";
import Brochure from "./components/Brochure";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Recruiters from "./components/Recruiters";
import SideBar from "./components/SideBar/SideBar";
import Body from "./components/BodySec/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Faq from "./components/FAQ/Faq";
import Dashes from "./components/DashFeatures/Dashes";
import PlacedStu from "./components/Placed/PlacedStu";
import Jobs from "./components/Update/Jobs";
import Drives from "./components/Recents/Drives";
import Explore from "./components/Recents/Explore";
import Details from "./components/Users/Details";
import BodyStu from "./components/Users/BodyStu";
import Side from "./components/Users/Side";
import Desc from "./components/Users/Desc";
import Applied from "./components/Users/Applied";
import StuDrive from "./components/Users/StuDrive";
import { useEffect, useState } from "react";
import PlacementProcess from "./components/Users/PlacementProcess";
import Error from "./components/ErrorPage/Error";

function App() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  useEffect(() => {
    const savedAppliedJobs = JSON.parse(localStorage.getItem("appliedJobs"));
    if (savedAppliedJobs) {
      setAppliedJobs(savedAppliedJobs);
    }
  }, []);

  const handleApplyNow = (jobDetails) => {
    const isJobApplied = appliedJobs.some(
      (job) => job.cname === jobDetails.cname && job.role === jobDetails.role
    );

    if (!isJobApplied) {
      setAppliedJobs((prevJobs) => {
        const newJobs = [...prevJobs, jobDetails];
        localStorage.setItem("appliedJobs", JSON.stringify(newJobs));
        return newJobs;
      });
    }
  };

  const clearAppliedJobs = () => {
    setAppliedJobs([]);
    localStorage.removeItem("appliedJobs");
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar /> <Home /> <Features /> <Brochure /> <Recruiters />{" "}
              <Footer />
            </>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route
          path="/details"
          element={
            <div className="containn">
              <Details />
            </div>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <div className="containn">
              <SideBar
                job="Update Jobs"
                sched="Departments"
                apply="Placed Students"
              />{" "}
              <Body />
            </div>
          }
        ></Route>
        <Route
          path="/departments"
          element={
            <div className="containn">
              <SideBar
                job="Update Jobs"
                sched="Departments"
                apply="Placed Students"
              />
              <Dashes />
            </div>
          }
        ></Route>
        <Route
          path="/stu"
          element={
            <div className="containn">
              <SideBar
                job="Update Jobs"
                sched="Departments"
                apply="Placed Students"
              />
              <PlacedStu />
            </div>
          }
        ></Route>
        <Route
          path="/jobs"
          element={
            <div className="containn">
              <SideBar
                job="Update Jobs"
                sched="Departments"
                apply="Placed Students"
              />
              <Jobs />
            </div>
          }
        ></Route>
        <Route
          path="/recent"
          element={
            <div className="containn">
              <SideBar
                job="Update Jobs"
                sched="Departments"
                apply="Placed Students"
              />
              <Drives />
            </div>
          }
        ></Route>
        <Route
          path="/explore"
          element={
            <div className="containn">
              <SideBar
                job="Update Jobs"
                sched="Departments"
                apply="Placed Students"
              />
              <Explore />
            </div>
          }
        ></Route>
        
        <Route
          path="/studashboard"
          element={
            <div className="containn">
              <Side job="Jobs" sched="Schedule" apply="Applied Jobs" />
              <BodyStu />
            </div>
          }
        ></Route>
        <Route
          path="/explorestu"
          element={
            <div className="containn">
              <Side job="Jobs" sched="Schedule" apply="Applied Jobs" />
              <Explore />
            </div>
          }
        ></Route>
        <Route
          path="/studrive"
          element={
            <div className="containn">
              <Side job="Jobs" sched="Schedule" apply="Applied Jobs" />
              <StuDrive />
            </div>
          }
        ></Route>
        <Route
          path="/desc1"
          element={
            <div className="containn">
              <Side job="Jobs" sched="Schedule" apply="Applied Jobs" />
              <Desc
                handleApplyNow={handleApplyNow}
                appliedJobs={appliedJobs}
                image={company1}
                cname="Wipro"
                role="Software Engineer"
                loc="Mumbai, India"
                desc="Wipro is a leading global information technology, consulting and business process services company. A company recognized globally for its comprehensive portfolio of services, strong commitment to sustainability, and good corporate citizenship, we have over 250,000 dedicated employees serving various enterprises across six continents."
                eligible="CSE/EE/MCA"
                sal="6 LPA"
              />
            </div>
          }
        ></Route>
        <Route
          path="/desc2"
          element={
            <div className="containn">
              <Side job="Jobs" sched="Schedule" apply="Applied Jobs" />
              <Desc
                handleApplyNow={handleApplyNow}
                appliedJobs={appliedJobs}
                image={company2}
                cname="Tech Mahindra"
                role="SDE"
                loc="Bangalore, India"
                desc="As an associate software engineer, you'll be working in a team and on diverse projects. To be successful in this role, you must possess strong analytical, problem solving and technical skills. You must be able to communicate clearly and confidently with the clients. You must be flexible enough and ready to work in Agile environment on any type of projects including 24X7 projects."
                eligible="CSE/ECE"
                sal="4.8 LPA"
              />
            </div>
          }
        ></Route>
        <Route
          path="/desc3"
          element={
            <div className="containn">
              <Side job="Jobs" sched="Schedule" apply="Applied Jobs" />
              <Desc
                handleApplyNow={handleApplyNow}
                appliedJobs={appliedJobs}
                image={company3}
                cname="TCS"
                role="Software Developer"
                loc="Noida, India"
                desc="As an Associate software engineer, you’ll be working in a team and on diverse projects. To be successful in this role, you must possess strong analytical, problem solving and technical skills. You must be able to communicate clearly and confidently with the clients. You must be flexible enough and ready to work in Agile environment on any type of projects including 24X7 projects."
                eligible="CSE/EE/MCA"
                sal="5.5 LPA"
              />
            </div>
          }
        ></Route>
        <Route
          path="/desc4"
          element={
            <div className="containn">
              <Side job="Jobs" sched="Schedule" apply="Applied Jobs" />
              <Desc
                handleApplyNow={handleApplyNow}
                appliedJobs={appliedJobs}
                image={company4}
                cname="Dell"
                role="BDE"
                loc="Kolkata, India"
                desc="The Business Development Executive for Domestic Staffing is responsible for driving business growth and revenue generation for our domestic staffing agency. This role involves identifying and engaging with potential clients, building lasting relationships, and ensuring the successful placement of domestic staff with families."
                eligible="CSE/EE/ME"
                sal="3.3 LPA"
              />
            </div>
          }
        ></Route>
        <Route
          path="/desc5"
          element={
            <div className="containn">
              <Side job="Jobs" sched="Schedule" apply="Applied Jobs" />
              <Desc
                handleApplyNow={handleApplyNow}
                appliedJobs={appliedJobs}
                image={company5}
                cname="Accenture"
                role="ASE"
                loc="Noida, India"
                desc="The Associate Software Engineer will be part of the software development team and participates in all phases of the software development project life cycle, includes analysis, design, develop code, test business software applications and project implementation. Assist in defining and reviewing requirements and use cases for the application and Design the application to meet the business process design and application requirements."
                eligible="CSE/EE/MCA"
                sal="4.8 LPA"
              />
            </div>
          }
        ></Route>
        <Route
          path="/desc6"
          element={
            <div className="containn">
              <Side job="Jobs" sched="Schedule" apply="Applied Jobs" />
              <Desc
                handleApplyNow={handleApplyNow}
                appliedJobs={appliedJobs}
                image={company6}
                cname="Infosys"
                role="Software Engineer"
                loc="Bangalore, India"
                desc="Infosys is a global leader in next-generation digital services and consulting. We enable clients in 45 countries to navigate their digital transformation. With over three decades of experience in managing the systems and workings of global enterprises, we expertly steer our clients through the many nexts of their digital journey. We do it by enabling the enterprise with an AI-powered core that helps prioritize the execution of change."
                eligible="CSE/EE/ME/MCA"
                sal="5.2 LPA"
              />
            </div>
          }
        ></Route>
        <Route
          path="/applied"
          element={
            <div className="containn">
              <Side job="Jobs" sched="Schedule" apply="Applied Jobs" />
              <Applied
                appliedJobs={appliedJobs}
                clearAppliedJobs={clearAppliedJobs}
              />
            </div>
          }
        ></Route>
        <Route
          path="/schedule"
          element={
            <div className="containn">
              <Side job="Jobs" sched="Schedule" apply="Applied Jobs" />
              <PlacementProcess appliedJobs={appliedJobs}/>
            </div>
          }
        ></Route>
        <Route
          path="/sturecent"
          element={
            <div className="containn">
              <Side job="Jobs" sched="Schedule" apply="Applied Jobs"/>
              <Drives />
            </div>
          }
        ></Route>
        <Route
          path="/stuexplore"
          element={
            <div className="containn">
              <Side job="Jobs" sched="Schedule" apply="Applied Jobs"/>
              <Explore />
            </div>
          }
        ></Route>
        <Route
          path="/404-Not-Found"
          element={<Error/>}
        >

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
