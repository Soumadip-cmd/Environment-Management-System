import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.jpg';

const Home = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark " style={{
        height:"95px"
      }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img src={logo} alt="Logo" style={{ height: "70px", width: "149px" }} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/home" style={{ color: "white", marginRight: "60px" }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus" style={{ color: "white", marginRight: "60px" }}>About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white", marginRight: "60px" }}>
                  Our Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/airquality">Air Quality Monitoring</Link></li>
                
                  
                  <li><Link className="dropdown-item" to="/recycling">Recycling Initiatives</Link></li>
                  <li><Link className="dropdown-item" to="/community">Community Recycling Rewards Programs</Link></li>
                  <li><Link className="dropdown-item" to="/landfill">Landfill Management System</Link></li>
                  <li><Link className="dropdown-item" to="/waterleakage">Water Leakage Reporting</Link></li>
                  <li><Link className="dropdown-item" to="/wastemanegment">Waste Management Optimization</Link></li>
                  <li><Link className="dropdown-item" to="/climate">Climate Change Impact Assessment</Link></li>
                  
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/carrier" style={{ color: "white", marginRight: "60px" }}>Carrier</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" style={{ color: "white", marginRight: "60px" }}>Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" style={{ color: "white", marginRight: "60px" }}>Login/Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Home;
