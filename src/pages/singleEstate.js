import React, { Component } from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import * as firebase from "firebase";
class SingleEstate extends Component {
  state = {
    listOfImages: []
  };

  // const { listOfImages } = this.state;
  // listOfImages.push(url);
  // this.setState({ listOfImages });
  //   });
  // };

  render() {
    return (
      <div>
        <Hero>
          <Banner title={"SingleEstate"}>
            <Link to="/LogIn" className="btn-primary">
              Back To The Map
            </Link>
          </Banner>
        </Hero>
        <section className="single-room">
          <div>
            {this.state.listOfImages.map((item, i) => {
              return (
                <img
                  src={item || "http://via.placeholder.com/400x300"}
                  alt="Uploaded images"
                  height="300"
                  width="400"
                />
              );
            })}
          </div>
          <div>
            <article className="desc">
              <h3> Details</h3>
              <p>
                {" "}
                sdfghjklkjhgfdsdfghjkdsofhdsjniuesfnkdsiovnsdv
                <br />
                dsfbjnkdsafjoodsf;mladfdos;fkmafn
                <br />
                asfvdhasbkdasjhdasouidhsuaidnsaijdsadsadhsa
                <br />
                dfjsdandjasdaksdasjhdjashdklsasdahufsdjfnsdljf
                <br />
                ndsjfds;jfdsafhsosdafihl
              </p>
            </article>
            <article className="Info">
              <h3>Info</h3>
              <h6> price: 222</h6>
              <h6> price: 222</h6>
              <h6> price: 222</h6>
              <h6> price: 222</h6>
            </article>
          </div>
        </section>
      </div>
    );
  }
}
export default SingleEstate;
