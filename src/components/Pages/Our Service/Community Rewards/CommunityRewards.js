import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CommunityRewards.css';


const CommunityRewards = () => {
  const handleCancel = () => {
    setShowForm(false);
    setShowTrackForm(false);
  };
 
  const [showForm, setShowForm] = useState(false);
  const[showTrack,setShowTrackForm]= useState(false);
  const [statusData, setStatusData] = useState({});
  const [approvedRewards, setApprovedRewards] = useState([]);
 
  // const [showRewardMessage, setShowRewardMessage] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_docx: "", 
    user_email: "",
    user_sex: "",
    user_address: "",
    user_zip: "",
    user_city: "",
    user_state: "",
    user_district: "",
   
    user_liveaddress: "",
    user_emergencyphneno: "",
    work_type:"",
    other_worktype:"",
    date_time:"",
    description:""
  });


  const [trackId, setTrackId] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/rewards-claim");
        const data = response.data.reduce((acc, curr) => {
          acc[curr._id] = curr.status;
          return acc;
        }, {});
        setStatusData(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []);
 
  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? event.target.files[0] : value,
    }));
  };
  const handleGetRewards = async () => {
    try {
      const response = await axios("http://localhost:8080/rewards-claim");
      const status = response.data;
  
     
      const approvedRewards = status.filter(item => item.status === "Approved");
      setApprovedRewards(approvedRewards);
      
      console.log("Approved Rewards:", approvedRewards);
      
    } catch (error) {
      console.error('Error getting rewards:', error);
      alert("Error getting rewards. Please try again.");
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
  const handleTrack = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/rewards-claim/${trackId}`);
      const { status } = response.data;
      alert(`Status of rewards claim ${trackId}: ${status}`);
    } catch (error) {
      alert(`No status found for ID ${trackId}`);
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
      console.log('Response Data:', response.data); 
      
      if (response.status === 201) {
        const newId = response.data._id; 
      
        
        // Update status data by merging the new ID and status with the existing state
        setStatusData((prevStatusData) => ({
          ...prevStatusData,
          [newId]: "Pending"
        }));
  
        setFormData({
          user_name: "",
          user_docx: "",
          user_email: "",
          user_sex: "",
          user_address: "",
          user_zip: "",
          user_city: "",
          user_state: "",
          user_district: "",
          user_liveaddress: "",
          user_emergencyphneno: "",
          work_type:"",
          other_worktype:"",
          date_time:"",
          description:""
        });
  
        setShowForm(false);
        setShowTrackForm(false);
  
        alert("Reward Claimed Successfully! Wait for approval :-)");
        console.log(newId);
       
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Error submitting form. Please try again.");
    }
  };
  
  
  
  

    return (
      <div className="container mt-5">
        <div className="border p-4 rounded">
          <h2>Reward System </h2>
          <button
            className="btn btn-danger mt-3 me-3"
            onClick={() => setShowForm(true)}
          >
            Cliam Your Rewards
          </button>
          {showForm && (
            <form onSubmit={handleSubmit} >
            <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-3">
                 
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
                    <label htmlFor="incidentPhoto">Upload Your Contribution Proof Image</label>
                    <input
                      type="file"
                      className="form-control"
                      id="user_docx"
                      name="user_docx"
                     
                      accept=".docx,.pdf,.png,.jpg,.jpeg,.gif"
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
              <label htmlFor="customTextarea" className="form-label">Describe Your Problem</label>
              <textarea className="form-control" id="description" rows="3" name="description" value={formData.description} onChange={handleChange}></textarea>
            </div>

                
              
             </div>
             <div className='row'>
      <div className='col-sm-12 col-md-3 mb-3'>
        <label htmlFor='work_type'>Select Your Contribution Type </label>
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
        <div className='col-sm-12 col-md-3 mb-3'>
          <label htmlFor='other_worktype'>If Other type here <span style={{ color:"red" }}>*</span></label>
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
      <div className='col-sm-12 col-md-3 mb-3'>
              <label htmlFor="date">Contribution Date & Time </label>
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
              <div className='col-sm-12 col-md-3 mb-3'>
              <label>Action </label>
              <div className="d-flex  ">
             <button type="button" className="btn btn-secondary " onClick={handleCancel}>Cancel</button>
              <button type="submit" className="btn btn-primary" style={{
                marginLeft:"15px"
              }}>Submit</button>
               </div>
                </div>
            </div>
            </form>
          )}
          {!showForm && (
          <div>
            <button className="btn btn-success mt-3" onClick={() => setShowTrackForm(true)}>Track Your Rewards</button>
            {showTrack && (
              <div>
                <input type="text" placeholder="Enter ID" onChange={(e) => setTrackId(e.target.value)} />
                <button onClick={handleTrack}>Track</button>
              </div>
            )}

            {/* Display status of rewards claim */}
            {Object.keys(statusData).map((id) => (
              <div key={id}>
                <p>ID: {id}, Status: {statusData[id]}</p>
              </div>
            ))}
          </div>
        )}
        <button className="btn btn-info mt-3 ms-3" onClick={handleGetRewards}>
          Get Your Rewards
        </button>
        {approvedRewards.length > 0 && (
          <div>
            <h3>Approved Rewards:</h3>
            <ul>
              {approvedRewards.map(reward => (
                <li key={reward._id}>ID: {reward._id}, Status: {reward.status}</li>
              ))}
            </ul>
            <button className='btn btn-succes'> Download Your Certificate</button>
          </div>
        )}
      
       
      


          
        </div>
      </div>
  )
}

export default CommunityRewards;
