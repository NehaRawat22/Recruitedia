import "./App.css";
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
import Details from "./components/Details/Details";
import BodyStu from "./components/StudentPanel/BodyStu";

function App() {
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
              <SideBar job="Jobs" sched="Schedule" apply="Applied Jobs" />
              <BodyStu />
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
