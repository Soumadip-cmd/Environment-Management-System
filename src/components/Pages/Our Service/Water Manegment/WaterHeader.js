import React from "react";

const WaterHeader = () => {
  return (
    <>
      <header className="py-3" style={{ background: "#228B22" }}>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start px-2">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-light text-decoration-none"
            >
              {/* You can replace the placeholder image link with your desired header picture */}
              <img
                src="header-picture.jpg"
                height={50}
                alt="Header Logo"
                className="mx-2"
              />
            </a>

            {/* Navigation links */}
            <ul className="nav col-12 col-lg-auto mb-2 mb-lg-0 me-lg-3 justify-content-center">
              <li>
                <a href="#" className="nav-link px-5 link-light extra1">
                  <b>Water Management</b>
                </a>
              </li>
              {/* Additional navigation links can be added here */}
            </ul>

            {/* User profile dropdown */}
            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block link-light text-decoration-none"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {/* You can replace the placeholder image link with the user's profile picture */}
                <img
                  src="profile-picture.jpg"
                  alt="User Profile"
                  width="40"
                  height="40"
                  className="rounded-circle mx-2"
                />
              </a>
              <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default WaterHeader;
