import React from "react";
import "./Cards.css";
import dep1 from "../../assets/cse.webp";
import dep2 from "../../assets/mechh.jpg";
import dep3 from "../../assets/elec.jpg";
import dep4 from "../../assets/civv.jpg";
import dep5 from "../../assets/chem.png";
import dep6 from "../../assets/biotech.jpg";
const Cards = () => {
  return (
    <>
      <div className="mainer">
        <h1 className="titler">Departments</h1>
        <ul className="cardser">
          <li className="cards_item">
            <div className="carder">
              <div className="card_image">
                <img className="imager" src={dep1} />
              </div>
              <div className="card_content">
                <h2 className="card_title">Computer Science & Engineering</h2>
                <p className="card_text">
                  It is a course that deals with the design, implementation, and
                  management of information systems of both software and
                  hardware processes.
                </p>
                <button className="btner card_btn">Explore</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="carder">
              <div className="card_image">
                <img className="imager" src={dep2} />
              </div>
              <div className="card_content">
                <h2 className="card_title">Mechanical Engineering</h2>
                <p className="card_text">
                  Mechanical engineering is the study of physical machines that
                  may involve force and movement. It combines physics and
                  mathematics principles.
                </p>
                <button className="btner card_btn">Explore</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="carder">
              <div className="card_image">
                <img className="imager" src={dep3} />
              </div>
              <div className="card_content">
                <h2 className="card_title">Electrical Engineering</h2>
                <p className="card_text">
                  Electrical engineering is an engineering discipline concerned
                  with the study, design, and application of equipment and
                  devices.
                </p>
                <button className="btner card_btn">Explore</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="carder">
              <div className="card_image">
                <img className="imager" src={dep4} />
              </div>
              <div className="card_content">
                <h2 className="card_title">Civil Engineering</h2>
                <p className="card_text">
                  Civil engineering is a professional engineering discipline
                  that deals with the design, construction, and maintenance of
                  the physical and naturally built environment, including public
                  works.
                </p>
                <button className="btner card_btn">Explore</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="carder">
              <div className="card_image">
                <img className="imager" src={dep5} />
              </div>
              <div className="card_content">
                <h2 className="card_title">Chemical Engineering</h2>
                <p className="card_text">
                  Chemical engineering is an engineering field which deals with
                  the study of operation and design of chemical plants as well
                  as methods of improving production.
                </p>
                <button className="btner card_btn">Explore</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="carder">
              <div className="card_image">
                <img className="imager" src={dep6} />
              </div>
              <div className="card_content">
                <h2 className="card_title">BioTechnology</h2>
                <p className="card_text">
                  Biotechnology engineering is a branch of applied biology and
                  chemical engineering standards that includes the utilization
                  of living things in technology, engineering, medicine, and
                  various useful things.
                </p>
                <button className="btner card_btn">Explore</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Cards;
