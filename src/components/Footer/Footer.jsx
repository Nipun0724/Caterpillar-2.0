import React from "react";
import logo from "../../assets/undefined - Imgur.png";
import facebook from "../../assets/facebook (1).svg";
import instagram from "../../assets/instagram.svg";
import medium from "../../assets/medium.svg";

const Footer = () => {
  return (
    <div>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <img
                src={logo}
                alt=""
                style={{ height: "30px", width: "50px" }}
              />
            </a>
            <span class="mb-3 mb-md-0 text-body-secondary">
              © 2024 Company, Inc
            </span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
                <img src={instagram} alt="" />
              </a>
            </li>
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
                <img src={medium} alt="" />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
