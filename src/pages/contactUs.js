import React, { Component } from "react";
const image1 = require("../assets/instagram-2-1-png-transparent-logo.png");
const image2 = require("../assets/facebook_circle-512.png");
class ContactUs extends Component {
  state = {
    images: [image1, image2]
  };
  render() {
    return (
      <section className="contacts">
        <div className="contact-center">
          {this.state.images.map((item, index) => {
            return (
              <article key={index} className="contact">
                <img src={item} width="30px" height="30px" className='img' />
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default ContactUs;
