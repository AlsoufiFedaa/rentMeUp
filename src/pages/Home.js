import React, { useEffect, useContext } from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Services from "../Components/Services";
import ImageCarousel from "../Components/imageCarousel";
import AOS from "aos";
import { AuthContext } from "../Components/auth";
import ContactUs from "./contactUs";
import { Redirect } from "react-router";
const Home = () => {
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

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  if (currentUser) {
    return <Redirect to="/HomeLogged" />;
  }

  return (
    <>
      <Hero>
        <Banner title="Welcome">
          <Link to="/SignUP" className="btn-primary">
            Sign Up
          </Link>
          <Link to="/LogIn" className="btn-primary">
            Log In
          </Link>
        </Banner>

        <ImageCarousel />
      </Hero>
      <Services />
      <ContactUs />
    </>
  );
};
export default Home;
