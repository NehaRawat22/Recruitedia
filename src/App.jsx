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
          path="/dashboard"
          element={
            <div className="containn">
              <SideBar /> <Body />
            </div>
          }
        ></Route >
        <Route path="/departments"
        element={
          <div className="containn">
            <SideBar/><Dashes/>
          </div>
        }>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
