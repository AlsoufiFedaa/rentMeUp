import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Services from "../Components/Services";
import ImageCarousel from "../Components/imageCarousel";

import ContactUs from "./contactUs";

const HomeLogged = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Welcome"
          subtitle="This website helps you find your next home!"
        >
          <Link to="/MainContainer" className="btn-primary">
            See Map
          </Link>
          <Link to="/AddPropery" className="btn-primary">
            Add Your Home
          </Link>
        </Banner>

        <ImageCarousel />
      </Hero>
      <Services />
      <ContactUs />
    </>
  );
};
export default HomeLogged;
