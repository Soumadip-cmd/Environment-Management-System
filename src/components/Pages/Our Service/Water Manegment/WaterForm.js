import React, { useState, useEffect } from 'react';
import WaterHeader from './WaterHeader'; // Import the WaterHeader component
import './WaterManagement.css';

const WaterManagementForm = () => {
  const [waterProblem, setWaterProblem] = useState('');

  const handleInputChange = (event) => {
    setWaterProblem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission
    console.log('Water problem submitted:', waterProblem);
    // You can add further logic here to send the data to the backend or perform other actions
  };

  return (
    <div className="container mt-5">
      <div className="border p-4 rounded">
        <h2>Water Leakage Reporting</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="report">Write your water leakage problem:</label>
            <textarea
              className="form-control"
              id="report"
              rows="3"
              value={waterProblem}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default WaterManagementForm;
