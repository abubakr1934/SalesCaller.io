import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../App.css";

const Footer = () => {
  return (
    <div class="footer-main container ">
      <footer class="py-5">
        <div class="row">
          <div class="cont col-6 col-md-2 mb-3">
            <h5 className="heading">Company</h5>
            <ul class="nav flex-column">
              <li class="text nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Contact Us
                </a>
              </li>
              <li class="text nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Terms and Conditions
                </a>
              </li>
              <li class="text nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Privacy Policy
                </a>
              </li>
              <li class="text nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          <div class="cont col-6 col-md-2 mb-3">
            <h5 className="heading">Product</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="text nav-link p-0 text-body-secondary">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="text nav-link p-0 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="text nav-link p-0 text-body-secondary">
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div class="cont col-6 col-md-2 mb-3">
            <h5 className="heading">Resources</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="text nav-link p-0 text-body-secondary">
                  Blogs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="text nav-link p-0 text-body-secondary">
                  Version Release
                </a>
              </li>
            </ul>
          </div>

          <div class="cont1 col-md-5 offset-md-1 mb-3">
            <form>
              <h5 >Subscribe to our newsletter</h5>
              <p>Signup for our newsletter to get the latest news, updates and special offers in your inbox.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <button class="btn-design btn " type="button">
                  Subscribe
                </button>
                
              </div>
            </form>
          </div>
          
        </div>
        
        <p style={{marginLeft:"954px",lineHeight:"0.01"}}>Your Email is safe with us! We don't spam.</p>

        <div class=" bottom-footer d-flex flex-column flex-sm-row justify-content-between py-4 my-4 ">
            <div class="logo-image"><img src="https://salescaller.io/website_assets/images/HeaderLogo.svg" alt="Home" className="home-image" style={{marginLeft:"40px"}} /></div>
            <div class="reserve"><p>© 2024 All rights reserved | Powered By <a href="https://logicinnovates.com/" style={{fontSize:"17px",fontWeight:"bold"}}>Logic Innovates</a></p></div>

            <div class='icons' style={{marginRight:"40px"}}><ul class="list-unstyled d-flex">
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
