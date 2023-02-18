import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer_section">
        <div className="container">
          <div className="social_icon">
            <a className="padding_10" href="#">
              <img src="images/fb-icon.png" />
            </a>
            <a className="padding_10" href="#">
              <img src="images/twitter-icon.png" />
            </a>
            <a className="padding_10" href="#">
              <img src="images/linkedin-icon.png" />
            </a>
            <a className="padding_10" href="#">
              <img src="images/youtub-icon.png" />
            </a>
          </div>
          <div className="location_main">
            <div className="location_text">
              <img src="images/map-icon.png" />
              <span className="padding10">
                <a href="#">Gb road 123 london Uk </a>
              </span>
            </div>
            <div className="location_text center">
              <img src="images/call-icon.png" />
              <span className="padding10">
                <a href="#">Call : (+01) 123456789012</a>
              </span>
            </div>
            <div className="location_text right">
              <img src="images/mail-icon.png" />
              <span className="padding10">
                <a href="#">demo@gmail.com</a>
              </span>
            </div>
          </div>
          <div className="Enter_mail_main">
            <input
              type="text"
              className="Enter_text"
              placeholder="Enter Your Name"
              name="Enter Your Name"
            />
            <div className="subscribe_bt">
              <a href="#">Subscribe</a>
            </div>
          </div>
        </div>
      </div>
      {/* footer section end */}
      {/* copyright section start */}
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">
            Copyright 2020 All Rights Reserved.
            <a href="https://html.design"> Free html Templates</a>
          </p>
        </div>
      </div>
      {/* copyright section end */}
    </div>
  );
};

export default Footer;
