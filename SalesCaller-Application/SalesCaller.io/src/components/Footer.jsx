import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../App.css";

const Footer = () => {
  return (
    <div className="footer-main container ">
      <footer className="py-5">
        <div className="row">
          <div className="cont col-6 col-md-2 mb-3">
            <h5 className="heading">Company</h5>
            <ul className="nav flex-column">
              <li className="text nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Contact Us
                </a>
              </li>
              <li className="text nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Terms and Conditions
                </a>
              </li>
              <li className="text nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Privacy Policy
                </a>
              </li>
              <li className="text nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="cont col-6 col-md-2 mb-3">
            <h5 className="heading">Product</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="text nav-link p-0 text-body-secondary">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text nav-link p-0 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text nav-link p-0 text-body-secondary">
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div className="cont col-6 col-md-2 mb-3">
            <h5 className="heading">Resources</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="text nav-link p-0 text-body-secondary">
                  Blogs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text nav-link p-0 text-body-secondary">
                  Version Release
                </a>
              </li>
            </ul>
          </div>

          <div className="cont1 col-md-5 offset-md-1 mb-3">
            <form>
              <h5 >Subscribe to our newsletter</h5>
              <p>Signup for our newsletter to get the latest news, updates and special offers in your inbox.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn-design btn " type="button">
                  Subscribe
                </button>
                
              </div>
            </form>
          </div>
          
        </div>
        
        <p style={{marginLeft:"954px",lineHeight:"0.01"}}>Your Email is safe with us! We don't spam.</p>

        <div className=" bottom-footer d-flex flex-column flex-sm-row justify-content-between py-4 my-4 ">
            <div className="logo-image"><img src="https://salescaller.io/website_assets/images/HeaderLogo.svg" alt="Home" className="home-image" style={{marginLeft:"40px"}} /></div>
            <div className="reserve"><p>© 2024 All rights reserved | Powered By <a href="https://logicinnovates.com/" style={{fontSize:"17px",fontWeight:"bold"}}>Logic Innovates</a></p></div>

            <div className='icons' style={{marginRight:"40px"}}><ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <FaTwitter style={{ fontSize: "24px" }} />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <FaInstagram style={{ fontSize: "24px" }} />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <FaFacebook style={{ fontSize: "24px" }} />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <FaYoutube style={{ fontSize: "24px" }} />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <FaLinkedin style={{ fontSize: "24px" }} />
              </a>
            </li>
          </ul></div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
