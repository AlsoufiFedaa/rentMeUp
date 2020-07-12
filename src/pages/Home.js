import React, { useContext } from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import Services from '../Components/Services';
import ImageCarousel from '../Components/imageCarousel';

import { AuthContext } from '../Components/auth';
import ContactUs from './contactUs';
import { Redirect } from 'react-router';
const Home = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  if (currentUser) {
    return <Redirect to="/HomeLogged" />;
  }

  return (
    <>
      <Hero>
        <Banner title="Welcome" subtitle="Find Your Next Home!">
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
