import React from "react";

const News = () => {
  return (
    <div className="news_section layout_padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <div className="news_main">
              <h1 className="news_taital">What says Our Grooms</h1>
              <div className="news_section_2">
                <h3 className="lina_text">Lina and jorv</h3>
                <p className="dummy_text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is thaIt is a long established
                  fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using Lorem
                  Ipsum is tha
                </p>
                <div className="quick_icon">
                  <img src="images/quick-icon.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 padding_right_0">
            <div className="news_img">
              <img src="images/news-img.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
