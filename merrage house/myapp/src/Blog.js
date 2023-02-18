import React from "react";

const Blog = () => {
  return (
    <div className="blog_section layout_padding">
      <div className="container">
        <h1 className="blog_taital">Blog</h1>
        <p className="blog_text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page{" "}
        </p>
        <div className="blog_section_2">
          <div className="row">
            <div className="col-md-6">
              <h6 className="date_text">
                06
                <br />
                Feb
              </h6>
              <div className="image_4">
                <img src="images/img-4.png" />
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="liya_text">Liya Mainial Catt</h4>
              <p className="ipsum_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore
              </p>
              <div className="follow_btn_main">
                <div className="like_bt">
                  <a href="#">Like</a>
                </div>
                <div className="comment_bt active">
                  <a href="#">Comment</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog_section_2">
          <div className="row">
            <div className="col-md-6">
              <h6 className="date_text">
                02
                <br />
                Feb
              </h6>
              <div className="jonas_box">
                <h4 className="jonas_text">Liya Mainial Catt</h4>
                <p className="ipsum_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore
                </p>
                <div className="follow_btn_main">
                  <div className="like_bt">
                    <a href="#">Like</a>
                  </div>
                  <div className="comment_bt active">
                    <a href="#">Comment</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image_5">
                <img src="images/img-4.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
