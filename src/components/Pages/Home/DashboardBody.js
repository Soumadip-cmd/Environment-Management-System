import React from 'react';

import "./DashboardBody.css";


const DashboardBody = () => {

  return (
    <div className="background-container" src="pollution.jpg">
      <div className='container1'>
        <div className="card" style={{width:'18rem'}}>
          <div className="card-body">
            <h5 className="card-title">WATER MANAGEMENT</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">more info</h6>
            
          </div>
        </div>
      </div>

      <div className='container2'>
        <div className="card" style={{width:'18rem'}}>
          <div className="card-body">
            <h5 className="card-title">AIR MANAGEMENT</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">more info</h6>
            
          </div>
        </div>
      </div>

      <div className='container3'>
        <div className="card" style={{width:'20rem'}}>
          <div className="card-body">
            <h5 className="card-title">GARBAGE MANAGEMENT</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">more info</h6>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBody;
