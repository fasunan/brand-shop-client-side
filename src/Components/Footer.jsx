

import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-gray-800 text-white font-serif rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">All Event</a>
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
      <aside>
        <p>Copyright © 2023 - All right reserved by Event Coordinator</p>
      </aside>
    </footer>
  );
};

export default Footer;
