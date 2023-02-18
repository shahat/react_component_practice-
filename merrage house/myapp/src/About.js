import React from "react";

const About = () => {
  return (
    <div className="about_section layout_padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 padding_0">
            <div className="abiut_images_main">
              <div>
                <img src="images/img-1.png" className="image_1" />
              </div>
              <div>
                <img src="images/img-2.png" className="image_2" />
              </div>
              <div className="main">
                <img src="images/img-3.png" className="image_3" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 padding_0">
            <div className="about_taital_main">
              <h1 className="about_taital">About</h1>
              <p className="about_text">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is tha
              </p>
              <div className="read_bt">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
