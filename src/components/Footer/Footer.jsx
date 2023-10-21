import React, { useEffect } from "react";
import "./footer.css";
import "./Footer.scss";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div data-aos="fade-up" data-aos-duration="2000" className="logoDiv">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="footerLogo"
          >
            <a href="#" className="logo">
              <h1 className="flex">
                <SiYourtraveldottv className="icon" />
                MF PRoduction
              </h1>
            </a>
          </div>
          <div className="socials flex">
            <a
              href="https://m.facebook.com/profile.php?id=100016556289325"
              target="_blank"
            >
              <ImFacebook className="icon" />
            </a>
            <BsTwitter className="icon" />
            <a href="https://www.instagram.com/md_faizan7860/" target="_blank">
              <AiFillInstagram className="icon" />
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="footerLinks"
        >
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="4000"
          className="footerLinks"
        >
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Condition</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="5000"
          className="footerLinks"
        >
          <span className="linkTitle">Contact Us</span>
          <span className="phone">+91 7097570661</span>
          <span className="email">mdabdulfaizan57613@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
