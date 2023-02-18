import React from "react";

const Marriage = () => {
  return (
    <div className="marriage_section layout_padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 padding_left_0">
            <div className="marriage_img">
              <img src="images/marriage-img.png" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="marriage_taital_main">
              <h3 className="marriage_taital">
                Facelity of our marriage house
              </h3>
              <p className="marriage_text">
                It is a long established fact that a reader will be distracted
                by the readable content of a page{" "}
              </p>
              <div className="marriage_section_2">
                <div className="marriage_taital_left">
                  <div className="car_box">
                    <img src="images/car-img.png" className="car_image" />
                  </div>
                </div>
                <div className="marriage_taital_right">
                  <h6 className="parking_text">Car Parking</h6>
                  <p className="long_text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page{" "}
                  </p>
                </div>
              </div>
              <div className="marriage_section_2">
                <div className="marriage_taital_left">
                  <div className="car_box">
                    <img src="images/balls-img.png" className="car_image" />
                  </div>
                </div>
                <div className="marriage_taital_right">
                  <h6 className="parking_text">Good Decoration</h6>
                  <p className="long_text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page{" "}
                  </p>
                </div>
              </div>
              <div className="marriage_section_2">
                <div className="marriage_taital_left">
                  <div className="car_box">
                    <img
                      src="images/water-bottle-img.png"
                      className="car_image"
                    />
                  </div>
                </div>
                <div className="marriage_taital_right">
                  <h6 className="parking_text">Pure Water</h6>
                  <p className="long_text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marriage;
