import React, { useState } from 'react';
import axios from 'axios';
import './WaterManagement.css';

export default function WaterManagement() {
  const handleCancel = () => {
    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_docx: null, // Changed to null for file input
    user_email: "",
    user_sex: "",
    user_address: "",
    user_zip: "",
    user_city: "",
    user_state: "",
    user_district: "",
    user_phone: "",
    user_liveaddress: "",
    user_emergencyphneno: "",
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? event.target.files[0] : value,
    }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send formData to the server using axios
      const response = await axios.post('http://localhost:8080/api/report-water', formData);
      console.log('Response:', response.data);
      // Reset form data after successful submission
      setFormData({
        user_name: "",
        user_docx: null, // Reset file input to null
        user_email: "",
        user_sex: "",
        user_address: "",
        user_zip: "",
        user_city: "",
        user_state: "",
        user_district: "",
        user_phone: "",
        user_liveaddress: "",
        user_emergencyphneno: "",
      });
      setShowForm(false);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error('Error:', error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="border p-4 rounded">
        <h2>Water Leakage Reporting</h2>
        <button
          className="btn btn-danger mt-3 me-3"
          onClick={() => setShowForm(true)}
        >
          Report Water Leakage
        </button>
        {showForm && (
          <form onSubmit={handleSubmit}>
          <div className="row">
              <div className="col-sm-12 col-md-3 col-lg-3">
                {/* Your form fields */}
                <div className="mb-3">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3">
                <div className="mb-3">
                  <label htmlFor="incidentPhoto">Upload Incident Photo</label>
                  <input
                    type="file"
                    className="form-control"
                    id="incidentPhoto"
                    name="user_docx"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                    />
                  </div>
              </div>
           <div className='row'>
            <div className='col-sm-12 col-md-3 col-lg-3'>
            <label htmlFor="sex">Gender</label>
                    <select
                      className="form-control"
                      id="sex"
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
            <div className='col-sm-12 col-md-3 col-lg-3'>
            <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="user_address"
                    value={formData.user_address}
                    onChange={handleChange}
                    required
                  />
                </div>
            </div>
            <div className="col-sm-12 col-md-3 mb-3">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="user_city"
                      value={formData.user_city}
                      onChange={handleChange}
                      required
                    />
                  </div>
           </div>
           <div className='row'>
            <div className='col-sm-12 col-md-3 mb-3'>
            <label htmlFor="state">State</label>
                    <input
                      type="text"
                      className="form-control"
                      id="state"
                      name="user_state"
                      value={formData.user_state}
                      onChange={handleChange}
                      required
                    />
            </div>
            <div className='col-sm-12 col-md-3 mb-3'>
            <label htmlFor="district">District</label>
                    <input
                      type="text"
                      className="form-control"
                      id="district"
                      name="user_district"
                      value={formData.user_district}
                      onChange={handleChange}
                      required
                    />
            </div>
            <div className='col-sm-12 col-md-3 mb-3'>
            <label htmlFor="zip">Pin Code</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      name="user_zip"
                      value={formData.user_zip}
                      onChange={handleChange}
                      required
                    />
            </div>
           </div>
           <div className='row'>
            <div className='col-sm-12 col-md-3 mb-3'>
            <label htmlFor="emergencyPhone">Emergency Contact Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="emergencyPhone"
                    name="user_emergencyphneno"
                    value={formData.user_emergencyphneno}
                    onChange={handleChange}
                    required
                  />
            </div>
            <div className='col-sm-12 col-md-3 mb-3'>
            <div className="mb-3">
                  <label htmlFor="liveLocation">Live Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="liveLocation"
                    name="user_liveaddress"
                    value={formData.user_liveaddress}
                    onChange={handleChange}
                    disabled
                  />
                  <button type="button" className="btn btn-primary mt-2" onClick={handleLiveLocation}>Get Live Location</button>
                </div>
                
            </div>
  <div className='col-sm-12 col-md-3 mb-3'>
  <label>Action </label>
  <div className="d-flex justify-content-between ">
    <button type="button" className="btn btn-secondary " onClick={handleCancel}>Cancel</button>
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</div>

            
           </div>
           {/* <div className="row">
              
              <div className="col-sm-12 col-md-12 col-lg-11 d-flex justify-content-start">
                <button type="button" className="btn btn-secondary me-2" onClick={handleCancel}>Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div> */}
          </form>
        )}
        <button className="btn btn-success mt-3">Track Reported Issues</button>
        <button className="btn btn-info mt-3 ms-3">Receive Updates</button>
      </div>
    </div>
  );
}
