
import "./App.css";
import Brochure from "./components/Brochure";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Recruiters from "./components/Recruiters";
import{
  BrowserRouter as Router,
  Routes,
  Route,}
  from 'react-router-dom';
import Register from "./components/Register";
import Faq from "./components/FAQ/Faq";

function App() {
  return (

    <Router>
        <Routes>
          <Route path="/" element={(<><Navbar/> <Home/> <Features/> <Brochure/> <Recruiters/> <Footer/></>)}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/faq" element={<Faq/>}></Route>
        </Routes> 
      </Router>


      // <Navbar />
      // <Home />
      // <Features />
      // <Brochure />
      // <Recruiters />
      // <Footer />
      // <Login path="/login"/>
  );
}

export default App;
