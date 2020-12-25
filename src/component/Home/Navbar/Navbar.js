import React from 'react';
import "../Header/Header.css";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0 mr-5">
              <li class="nav-item mr-4">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item mr-4">
                <a class="nav-link active" aria-current="page" href="#">About</a>
              </li>
              <li class="nav-item mr-4">
                <a class="nav-link active" aria-current="page" href="#">Dental Services</a>
              </li>
              <li class="nav-item mr-4">
                <a class="nav-link active text-white" aria-current="page" href="#">Reviews</a>
              </li>
              <li class="nav-item mr-4">
                <a class="nav-link active text-white" aria-current="page" href="#">Blog</a>
              </li>
              <li class="nav-item mr-4">
                <a class="nav-link active text-white" aria-current="page" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        
    );
};

export default Navbar;