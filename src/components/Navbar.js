import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="mainNav navbar navbar-light navbar-expand-lg fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#pageTop">Samuel Yoo</a>
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarContents" aria-controls="navbarContents" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarContents">
              <ul className="navbar-nav nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#info">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link js-scroll-trigger dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Contact
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="https://github.com/samuelyoo/" alt="GitHub Url"><i className="fab fa-github"></i>GitHub</a>
                    <a className="dropdown-item" href="https://www.linkedin.com/in/samuel-hc-yoo/" alt="linkedin Url"><i className="fab fa-linkedin-in"></i>LinkedIn</a>
                    <a className="dropdown-item" href="assets/documents/resume_SamuelYoo.pdf" alt="resume Url"><i className="fab fa-instagram"></i>Resume</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#contactInfo">Contact Info</a>
                </div>
                </li>
              </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
