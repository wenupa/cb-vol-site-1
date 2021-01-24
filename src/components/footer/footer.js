import React, { Component } from "react";
import "./footer.css";
import logo from './assets/logo/logo.png';
import '../footer/footer.css';

class Footer extends Component {
  state = {};
  render() {
    return <div>

{/* Footer */}
<footer className="bg-light text-center text-lg-start">
  {/* Grid container */}
  <div className="container p-4">
    {/*Grid row*/}
    <div className="row">
      {/*Grid column*/}
      <div className="col-lg-8 col-md-12 mb-4 mb-md-0">
        <a href="home.html" className="logo"><img src="satLogo.png" style={{"width":"100px"}} alt /></a>
        {/*<h5 class="text-uppercase">Footer Content</h5> */}
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet<br /> consectetur, adipisicing elit.<br />sed do eiusmod tempor incididunt ut <br /> labore et dolor magna <br /> 
        </p>
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-1 col-md-6 mb-4 mb-md-0">
        <br />
        <br />
        <br />
        <h6 className="mb-0">Lorem</h6>
        <br />
        <ul className="list-unstyled" text>
          <li>
            <a href="#!" onmouseover="this.style.color='red'" onmouseout="this.style.color='#212529'">Home</a>
          </li>
          <br />
          <li>
            <a href="#!" onmouseover="this.style.color='red'" onmouseout="this.style.color='#212529'">Blog</a>
          </li>
          <br />
          <li>
            <a href="#!" onmouseover="this.style.color='red'" onmouseout="this.style.color='#212529'">Forum</a>
          </li>
          <br />
          <li>
            <a href="#!" onmouseover="this.style.color='red'" onmouseout="this.style.color='#212529'">About</a>
          </li>
          <br />
          <li>
            <a href="#!" onmouseover="this.style.color='red'" onmouseout="this.style.color='#212529'">Contact</a>
          </li>
        </ul>
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-1 col-md-6 mb-4 mb-md-0">
        <br />
        <br />
        <br />
        <h6 className="mb-0">Ipsum</h6>
        <br />
        <ul className="list-unstyled" text>
          <li>
            <a href="#!" onmouseover="this.style.color='red'" onmouseout="this.style.color='#212529'">Home</a>
          </li>
          <br />
          <li>
            <a href="#!" onmouseover="this.style.color='red'" onmouseout="this.style.color='#212529'">Blog</a>
          </li>
          <br />
          <li>
            <a href="#!" onmouseover="this.style.color='red'" onmouseout="this.style.color='#212529'">Forum</a>
          </li>
          <br />
          <li>
            <a href="#!" onmouseover="this.style.color='red'" onmouseout="this.style.color='#212529'">About</a>
          </li>
          <br />
          <li>
            <a href="#!" onmouseover="this.style.color='red'" onmouseout="this.style.color='#212529'">Contact</a>
          </li>
        </ul>
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-1 col-md-6 mb-4 mb-md-0">
        <br />
        <br />
        <br />
        <h6 className="mb-0">Dolor</h6>
        <br />
        <ul className="list-unstyled" text>
          <li>
            <a href="#!" onmouseover="this.style.color='red'" onmouseout="this.style.color='#212529'">Home</a>
          </li>
          <br />
          <li>
            <a href="#!" onmouseover="this.style.color='red'" onmouseout="this.style.color='#212529'">Blog</a>
          </li>
          <br />
          <li>
            <a href="#!" onmouseover="this.style.color='red'" onmouseout="this.style.color='#212529'">Forum</a>
          </li>
          <br />
          <li>
            <a href="#!" onmouseover="this.style.color='red'" onmouseout="this.style.color='#212529'">About</a>
          </li>
          <br />
          <li>
            <a href="#!" onmouseover="this.style.color='red'" onmouseout="this.style.color='#212529'">Contact</a>
          </li>
        </ul>
      </div>
      {/*Grid column*/}
      {/* Copyright */}
      <div className="container d-flex justify-content-between py-4">
        <b>Copyright © 2020 Satriana. All Rights Reserved</b>
        <div className="col-lg-3">
          <a href="https://www.facebook.com/satriaanaorg"><i className="fab fa-facebook-f" /></a>
          <a href="https://twitter.com/satriaanaorg"><i className="fab fa-twitter" /></a>
          <a href="https://www.instagram.com/satriaanaorg/"><i className="fab fa-instagram" /></a>
          <a href="https://www.linkedin.com/company/satriaana/"><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
      {/* Copyright */}
    </div></div></footer>
{/* Footer */}
    </div>;
  }
}

export default Footer;
