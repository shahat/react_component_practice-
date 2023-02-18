import React from "react";

const Contact = () => {
  return (
    <div className="contact_srction layout_padding">
      <div className="container">
        <h1 className="contact_taital">Requeste A call Back</h1>
        <div className="contact_srction_2">
          <div className="mail_main">
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="mail_text"
                  placeholder="Full Name"
                  name="Full Name"
                />
                <input
                  type="text"
                  className="mail_text"
                  placeholder="Phone Number"
                  name="Phone Number"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="mail_text"
                  placeholder="Email"
                  name="Email"
                />
                <textarea
                  className="massage-bt"
                  placeholder="Massage"
                  rows={5}
                  id="comment"
                  name="Massage"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="send_bt">
              <a href="#">SEND</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
