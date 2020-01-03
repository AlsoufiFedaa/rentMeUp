import React from 'react'; 
import Hero from "../Components/Hero"
import Banner from "../Components/Banner"
import {Link} from "react-router-dom"
import Services from "../Components/Services"
import ImageCarousel from '../Components/imageCarousel'
import AddPropery from "./addProperty";
import MainMap from './mapContainer'


const Home=()=> {
    return ( 
        <>
       
           
             <Hero>
               

                <Banner title="Welcome" subtitlte="Find the best estate"> 
                <Link to="/SignUP" className="btn-primary"> Sign Up</Link>
                <Link to="/LogIn" className="btn-primary"> Log In</Link>

                </Banner>
                <ImageCarousel/>
             </Hero>
        <Services/> 
       
        <MainMap/>
      
        </> 
    )
}
export default Home;