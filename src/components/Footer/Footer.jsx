import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "./Footer.css"; // Import the CSS file here

export default function FooterCom() {
  return (
    <footer className="footer"> {/* Use the class name "footer" */}
    <div className="footer1">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5 sm:mt-3">
            <li className="title">
            <Link className="titlenavlink" to="/" exact>
                Ganesh Deshmukh
            </Link>
            </li>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-8">
            {/* Follow us */}
            <div>
              <h3 className="title">Follow Us</h3>
              <div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
            {/* Legal */}
            <div>
              <h3 className="title">Legal</h3>
              <div>
                <a
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
              <div>
                <a
                  href="#"
                >
                  Terms &amp; Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        <hr className="my-8" />

        <div className="footer2">
        <div className="w-full sm:flex sm:item-center sm:justify-between">
          <div>&copy; {new Date().getFullYear()} Ganesh Deshmukh's Portfolio</div>
          <div className="social-icons">
            <a href='https://www.instagram.com/kavya__maifil?utm_source=qr&igsh=MTZ0c2toa2htaTJ4MA=='>
              <FaInstagram />
            </a>
            <a href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADElDgsBOkUxT49dazt4I6qwFTVoAu4b0zk&keywords=siddhesh%20more&origin=RICH_QUERY_SUGGESTION&position=0&searchId=0f571b1d-fdc6-48ca-ac82-53e8943ab976&sid=ba%2C&spellCorrectionEnabled=false'>
              <FaLinkedin />
            </a>
            <a href='#'>
              <FaWhatsapp />
            </a>
            <a href='#'>
              <FaGithub />
            </a>
            <a href='#'>
              <FaTwitter />
            </a>
            <a href='#'>
              <FaFacebook />
            </a>
          </div>
        </div>
        </div>
    </footer>
  );
}
