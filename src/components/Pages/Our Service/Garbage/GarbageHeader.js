import React from "react";

const GarbageHeader = () => {
  return (
    <>
      <header className="py-3" style={{ background: "#781e1e" }}>
        <div className="">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start px-2">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-light text-decoration-none"
            >
              <img src="nav-logo.png" height={35} alt="Logo" className="mx-2" />
            </a>

            {/* <ul className="  me-lg-auto mb-2 justify-content-center mb-md-0"> */}
            <form className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 px-2">
              {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"> */}
              <span style={{ position: "relative" }}>
                <input
                  type="search"
                  className="form-control srch-style text-white px-4"
                  placeholder="Search EVS-Management"
                  aria-label="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  className="bi bi-search float-end m-2 mx-3 search-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </span>
            </form>

            <ul className="nav col-12 col-lg-auto mb-2 mb-lg-0 me-lg-3 justify-content-center">
              <li>
                <a href="#" className="nav-link px-5 link-light extra1">
                  <b>Soumadip's Page</b>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-star-fill mx-1" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><span className=" my-5">4 Stars</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bell-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                  </svg>
                </a>
              </li>
              
              
            </ul>
            <div className="dropdown text-end px-2">
              <a
                href="#"
                className="d-block link-light text-decoration-none "
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="35"
                  height="35"
                  className="rounded-circle mx-2 mb"
                />
              </a>
              <ul
                className="dropdown-menu text-small"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
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

export default GarbageHeader;
