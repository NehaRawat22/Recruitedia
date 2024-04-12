import React from "react";
import "./Jobs.css";

const Jobs = () => {
  return (
    <>
      <div className="mainer">
        <div className="containe">
          <div className="titler">Update the Job</div>
          <form action="#">
            <div className="form-rowed">
              <div className="input-datas">
                <input type="text" required />
                <div className="underliner"></div>
                <label htmlFor="">Company Name</label>
              </div>
              <div className="input-datas">
                <input type="text" required />
                <div className="underlinerr"></div>
                <label htmlFor="">Designation</label>
              </div>
            </div>
            <div className="form-rowed">
              <div className="input-datas">
                <input type="text" required />
                <div className="underliner"></div>
                <label htmlFor="">Salary Package</label>
              </div>
              <div className="input-datas">
                <input type="text" required />
                <div className="underliner"></div>
                <label htmlFor="">Qualification</label>
              </div>
            </div>
            <div className="form-rowed">
              <div className="input-datas textarea">
                <textarea rows="8" cols="80" required></textarea>
                <br />
                <div className="underliner"></div>
                <label htmlFor="">Write your message</label>
                <br />
                <div className="form-rowed submit-btn">
                  <div className="input-datas">
                    <div className="inner"></div>
                    <input type="submit" value="submit" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Jobs;
