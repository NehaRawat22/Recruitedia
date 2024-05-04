import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="page_404">
        <div className="row">
          <div>
            <div className="text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
                <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>

                <p>The page you are looking for not available!</p>

                <Link to="/" className="link_404">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Error;
