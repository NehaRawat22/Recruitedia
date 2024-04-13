import React from "react";
import "./Jobs.css";

const Jobs = () => {
  return (
    <>
      <div className="mainContent">
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
              
              <div className="input-datas">
                <input type="text" required />
                <div className="underliner"></div>
                <label htmlFor="img">Location</label>
              </div>
              <div className="input-datas">
                  <input type="text" required />
                  <div className="underliner"></div>
                  <label htmlFor="">Requirements</label>
                </div>
            </div>
            <div className="form-rowed">
              <div className="input-datas">
                  <input type="text" required />
                <div className="underliner"></div>
                <label htmlFor="">Description</label>
                </div>
                <div className="input-datas">
                Image
                <input type="file" required />
                <div className="underliner"></div>
              </div>
                
               
            </div>
            <div className="form-rowed submit-btn">
                <div className="input-datas">
                  <div className="inner"></div>
                  <input type="submit" value="submit" />
                </div>
              </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Jobs;
