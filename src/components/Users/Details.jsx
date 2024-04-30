import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Update/Jobs.css";

const Details = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "",
    branch: "",
    dob: "",
    cgpa: "",
    image: null,
    resume: null,
  });

  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check that all required fields are filled
    const { fullName, email, gender, branch, dob, cgpa, image, resume } =
      formData;

    if (
      fullName &&
      email &&
      gender &&
      branch &&
      dob &&
      cgpa &&
      image &&
      resume
    ) {
      navigate("/studashboard");
    } else {
      alert("Please fill all the required fields before submitting.");
    }
  };

  return (
    <div className="mainContent">
      <div className="containe">
        <div className="titler">Fill Details</div>
        <form onSubmit={handleSubmit}>
          <div className="form-rowed">
            <div className="input-datas">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <div className="underliner"></div>
              <label htmlFor="fullName">Full Name</label>
            </div>
            <div className="input-datas">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="underliner"></div>
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="form-rowed">
            <div className="input-datas">
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              />
              <div className="underliner"></div>
              <label htmlFor="gender">Gender</label>
            </div>
            <div className="input-datas">
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                required
              />
              <div className="underliner"></div>
              <label htmlFor="branch">Branch</label>
            </div>
          </div>
          <div className="form-rowed">
            <div className="input-datas">
              Image
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
                required
              />
            </div>
            <div className="input-datas">
              <input
                type="number"
                name="cgpa"
                value={formData.cgpa}
                onChange={handleChange}
                required
              />
              <div className="underliner"></div>
              <label htmlFor="cgpa">CGPA</label>
            </div>
          </div>
          <div className="form-rowed">
            <div className="input-datas">
              Resume
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                required
              />
            </div>
            <div className="input-datas">
              DOB
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
              <div className="underliner"></div>
              <label htmlFor="dob"></label>
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
  );
};

export default Details;
