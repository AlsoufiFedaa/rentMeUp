import React  from "react"; 
import Hero from "../Components/Hero"
import Banner from "../Components/Banner"
import {Link} from "react-router-dom"
const SingleEstate=(props)=> {
   console.log('item', props.location.params)
   return (
   <Hero hero='estateHero'> 
      <Banner title="Single Estate">
         <Link to='/' className="btn-primary"> return home</Link>
         </Banner>
   </Hero>
   )
};
export default SingleEstate; 