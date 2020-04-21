import React from 'react'; 
// import ImageCarousel from './imageCarousel'
const Hero=({children, hero})=> {
    return ( 
        <header className={hero}> 
  
       
        
        {children}
        </header>
    );
}
export default Hero;
Hero.defaultProps={
    hero: "defaultHero", 

    
}