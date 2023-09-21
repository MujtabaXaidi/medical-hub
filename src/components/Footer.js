import React from "react";
import LOGO from "../assets/images/svgs/footer_logo.svg";

import '../assets/styles/Footer.css'

const Footer = () => (
  <footer className="page-footer pt-4" style={{backgroundColor:'#022859', marginTop:30}}>
    <div className="container-fluid  text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <div style={{width:'100%',display:'flex',alignItems:'center',flexDirection:'column'}}>
          <img src={LOGO} style={{ height: 70,marginBottom:40,marginTop:40 }} />
            <p style={{width:300,textAlign:'left'}}>
              Medical Training Hub provides best training experience in Courses
              like CNA, CPR, Phlebotomy. You are more then welcomed to join our
              training programs and make your steps towards your career goals.
            </p>
          </div>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-2 mb-md-0 mb-1">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#/">Home</a>
            </li>
            <li>
              <a href="#/">About Us</a>
            </li>
            <li>
              <a href="#/courses">Courses</a>
            </li>
            <li>
              <a href="#/">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="col-md-2 mb-md-0 mb-1">
          <h5 className="text-uppercase">OUR POLICES</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#/phlebotomy-policy">Phlebotomy</a>
            </li>
            <li>
              <a href="#/cna=policy">CNA</a>
            </li>
            <li>
              <a href="#/cpr-policy">CPR</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2 mb-md-0 mb-1">
          <h5 className="text-uppercase">CONTACT</h5>
          <ul className="list-unstyled">
            <li>
            877-204-6232
            </li>
            <li>
            Info@medicaltraininghub.com
            </li>
           
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2023-2024 medical Training Hub All Rights Reserved
    </div>
  </footer>
);

export default Footer;
