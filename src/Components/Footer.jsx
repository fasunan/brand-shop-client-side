

import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-gray-800 text-white font-serif rounded ">
      <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    
  </nav>
      <nav>
        <p>Follow us on</p>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a>
            <FaFacebook className="text-blue-500"></FaFacebook>
          </a>
          <a>
            <FaInstagram className="text-orange-500"></FaInstagram>
          </a>
          <a>
            <FaTwitter className="text-blue-400"></FaTwitter>
          </a>
          <a>
            <FaYoutube className="text-red-600"></FaYoutube>
          </a>
        </div>
      </nav>
      
        {/* <div className="">
        <p>Copyright © 2023 - All right reserved by Event Coordinator</p>
        </div>
       */}
    </footer>
  );
};

export default Footer;
