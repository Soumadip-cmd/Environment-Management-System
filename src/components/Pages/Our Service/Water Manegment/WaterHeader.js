import React from "react";

const WaterHeader = () => {
  return (
    <>
      <header className="py-3" style={{ background: "#228B22" }}>
        <div className="">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start px-2">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-light text-decoration-none"
            >
              {/* You can replace the placeholder image link with your desired header picture */}
              <img
                src="header-picture.jpg"
                height={35}
                alt="Header Logo"
                className="mx-2"
              />
            </a>

            {/* Navigation links can be added here if needed */}

            <ul className="nav col-12 col-lg-auto mb-2 mb-lg-0 me-lg-3 justify-content-center">
              <li>
                <a href="#" className="nav-link px-5 link-light extra1">
                  <b>Water Management</b>
                </a>
              </li>
              {/* Additional navigation links can be added here */}
            </ul>

            {/* User profile dropdown can be added here */}
          </div>
        </div>
      </header>
    </>
  );
};

export default WaterHeader;
