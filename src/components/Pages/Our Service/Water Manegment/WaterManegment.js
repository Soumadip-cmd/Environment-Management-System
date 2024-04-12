import React, { useState } from 'react';
import axios from 'axios';
import WaterHeader from './WaterHeader'; // Import the WaterHeader component
import './WaterManagement.css';

const WaterManagement = () => {
  const handleCancel = () => {
    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_docx: '', 
    user_email: '',
    user_sex: '',
    user_address: '',
    user_zip: '',
    user_city: '',
    user_state: '',
    user_district: '',
    user_liveaddress: '',
    user_emergencyphneno: '',
    image_link: 'https://images.unsplash.com/photo-1533167649158-6d508895b680?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Updated image link
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? event.target.files[0] : value,
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
        alert('User Live location fetched successfully :-)');
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData(); 
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      const response = await axios.post('http://localhost:8080/rewards-claim', formDataToSend);
      setFormData({
        user_name: '',
        user_docx: '',
        user_email: '',
        user_sex: '',
        user_address: '',
        user_zip: '',
        user_city: '',
        user_state: '',
        user_district: '',
        user_liveaddress: '',
        user_emergencyphneno: '',
        image_link: '', // Reset image_link field after submission
      });
      setShowForm(false);
      if (response.status === 201) { 
        console.log('Form Submitted Successfully!');
        alert('Reward Claimed Successfully! Wait for approval :-)');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="water-body">
      <WaterHeader /> {/* Include the WaterHeader component */}
      <div className="container mt-5">
        <div className="border p-4 rounded">
          <h2>Water Leakage Reporting</h2>
          <button
            className="btn btn-danger mt-3 me-3"
            onClick={() => setShowForm(true)}
          >
            Claim Your Rewards
          </button>
          {showForm && (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="imageLink">Image Link</label>
                <input
                  type="text"
                  className="form-control"
                  id="imageLink"
                  name="image_link"
                  value={formData.image_link}
                  onChange={handleChange}
                />
              </div>
              {/* Rest of the form inputs */}
            </form>
          )}
          <button className="btn btn-success mt-3">Track Your Rewards</button>
          <button className="btn btn-info mt-3 ms-3">Receive Updates</button>
        </div>
      </div>
    </div>
  );
};

export default WaterManagement;

