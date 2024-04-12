import React from 'react';

const WaterHeader = () => {
  return (
    <header className="water-header">
      <div className="water-header-container">
        <img
          src="https://images.unsplash.com/photo-1533167649158-6d508895b680?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Water Header"
          className="water-header-image"
        />
        <div className="water-header-overlay"></div>
        <div className="water-header-content">
          <h1 className="water-header-title">Water Management System</h1>
          <p className="water-header-text">Report water-related issues and track their resolution.</p>
        </div>
      </div>
    </header>
  );
};

export default WaterHeader;
