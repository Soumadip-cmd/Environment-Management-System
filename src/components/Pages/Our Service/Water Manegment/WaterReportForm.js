import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from "axios"


const WaterForm = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    
    user_sex: '',
    user_liveaddress: '',
    description: '',
    work_type: '',
    other_worktype: '',
    date_time: '',
    
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? event.target.files[0] : value,
    }));
  };
const navigate=useHistory()
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
  
      const response = await axios.post('http://localhost:8080/contributor', formDataToSend);
      console.log('Response Data:', response.data);
  
    
      setFormData({
        user_name: "",
        user_docx: "",
       
        user_sex: "",
        user_liveaddress:"",
        work_type: "",
        other_worktype: "",
        date_time: "",
        description: "",
       
      });
  
      alert("Reward Claimed Successfully! Wait for approval :-)");
    } catch (error) {
      console.error('Error:', error);
      alert("Error submitting form. Please try again.");
      navigate.push('/paymentwater')
    }
  };
  
  

  const handleLiveLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const location = `${position.coords.latitude}, ${position.coords.longitude}`;
        setFormData((prevData) => ({
          ...prevData,
          user_liveaddress: location,
        }));
        alert("User Live location fetched successfully :-)")
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleCancel = () => {
    console.log('Form submission canceled');
  };


  return (
    <div className="container mt-5">
      <div className="border p-4 rounded">
        <h2>Reward System</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-12 col-md-3">
              <div className="mb-3">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
            <div className="mb-3">
            <label htmlFor="incidentPhoto">Upload Your Contribution Proof Image</label>
            <input
              type='file'
              className="form-control"
              id="user_docx"
              name="user_docx"
              accept=".docx,.pdf,.png,.jpg,.jpeg,.gif"
              onChange={handleChange}
              required
            />
          </div>

            </div>
         
            <div className="col-sm-12 col-md-3">
              <div className="mb-3">
                <label htmlFor="sex">Gender</label>
                <select
                  className="form-control"
                  id="user_sex"
                  name="user_sex"
                  value={formData.user_sex}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
          {/* Add more rows of form inputs here */}
          <div className="row">
            <div className="col-sm-12 col-md-3">
              <div className="mb-3">
                <label htmlFor="liveLocation">Live Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="user_liveLocation"
                  name="user_liveaddress"
                  value={formData.user_liveaddress}
                  onChange={handleChange}
                  disabled
                />
                <button type="button" className="btn btn-primary mt-2" onClick={handleLiveLocation}>Get Live Location</button>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <label htmlFor="customTextarea" className="form-label">Describe What Contribution You Made</label>
              <textarea className="form-control" id="description" rows="3" name="description" value={formData.description} onChange={handleChange}></textarea>
            </div>
          </div>
          {/* Add more rows of form inputs here */}
          <div className="row">
            <div className="col-sm-12 col-md-3">
              <label htmlFor="work_type">Select Your Contribution Type</label>
              <select
                className="form-control"
                id="work_type"
                name="work_type"
                value={formData.work_type}
                onChange={handleChange}
                required
              >
                <option value="" disabled>--------Select Your Contribution Type------------</option>
                <option value="garbage">Garbage Cleaning</option>
                <option value="water-likage">Water Leakage Solution</option>
                <option value="other">Other</option>
              </select>
            </div>
            {formData.work_type === 'other' && (
              <div className="col-sm-12 col-md-3">
                <label htmlFor="other_worktype">If Other type here <span style={{ color:"red" }}>*</span></label>
                <input
                  type="text"
                  className="form-control"
                  id="other_worktype"
                  name="other_worktype"
                  value={formData.other_worktype}
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="col-sm-12 col-md-3">
              <label htmlFor="date_time">Contribution Date & Time</label>
              <input
                type="datetime-local"
                className="form-control"
                id="date_time"
                name="date_time"
                value={formData.date_time}
                onChange={handleChange}
                required
              />
            </div>
           
            <div className="col-sm-12 col-md-3">
              <label>Action</label>
              <div className="d-flex">
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>  
                <button type="submit" className="btn btn-primary ms-2">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WaterForm;
