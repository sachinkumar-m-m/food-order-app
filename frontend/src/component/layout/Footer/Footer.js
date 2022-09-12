import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import LoginSignUp from "../../User/LoginSignUp";
import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
// background-image: url("../../images/image-1.jpg");


const Footer = () => {
  return (
    <footer id="footer">
      {/* <img src="../../images/image-1.jpg" alt="" /> */}
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        {/* <p>Download App for Android and IOS mobile phone</p> */}
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        {/* <h1>FOOD-APP</h1>
        <p>High Quality is our first priority</p> */}

        {/* <p>Copyrights 2021 &copy; MeAbhiSingh</p> */}
      </div>

      <div className="rightFooter">
        <h4></h4>
      <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="rightFooter">
        <h4></h4>
      <a href=""> Help & Support</a>
        <a href="">Partner with us</a>
        <a href="">Ride with us</a>
      </div>
      <div className="rightFooter">
        <h4></h4>
      <a href="">Legal Stufft</a>
        <a href="">Privacy Police</a>
        <a href="">Security</a>
      </div>
      <div className="rightFooter">
        <h4></h4>
      <a href=""><InstagramIcon/></a>
        <a href=""><TwitterIcon/></a>
        <a href=""><FacebookIcon/></a>
      </div>
    </footer>
  );
};

export default Footer;
