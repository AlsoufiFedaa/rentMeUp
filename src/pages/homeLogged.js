import React, { useEffect } from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Services from "../Components/Services";
import ImageCarousel from "../Components/imageCarousel";
import AOS from "aos";

import ContactUs from "./contactUs";

const HomeLogged = () => {
  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */

    AOS.init({
      offset: 400, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000 // values from 0 to 3000, with step 50ms
    });
  });

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <>
      <Hero>
        <Banner title="Welcome">
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
