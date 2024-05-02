import React from "react";
import "./Footer.css";
import twitter_logo from "../img/twitter.png"
import facebook_logo from "../img/facebook.png"
import instagram_logo from "../img/instagram.png"
import linkedin_logo from "../img/linkedin.png"
import pinterest_logo from "../img/pinterest.png"
import language_logo from "../img/language.png"
import coin_logo from "../img/coin.png"
import accessibility_logo from "../img/accessibility.png"

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Freelancer</span>
            <span>Buying on Freelancer</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From Freelancer</h2>
            <span>Freelancer Business</span>
            <span>Freelancer Pro</span>
            <span>Freelancer Logo Maker</span>
            <span>Freelancer Guides</span>
            <span>Get Inspired</span>
            <span>Freelancer Select</span>
            <span>ClearVoice</span>
            <span>Freelancer Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>F R E E L A N C E R <span style={{color:"#1dbf73",fontSize:"25px"}}> .</span></h2>

            <span>© FREELANCER International Ltd. 2024</span>
          </div>
          <div className="right">
            <div className="social">
              <img src={twitter_logo} alt="" />
              <img src={facebook_logo} alt="" />
              <img src={instagram_logo} alt="" />
              <img src={linkedin_logo} alt="" />
              <img src={pinterest_logo} alt="" />
            </div>
            <div className="link">
              <img src={language_logo} alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src={coin_logo} alt="" />
              <span>INR</span>
            </div>
            <img src={accessibility_logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
