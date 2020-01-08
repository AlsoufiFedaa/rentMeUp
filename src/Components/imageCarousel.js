import React from 'react';
import {Gallery, GalleryImage} from "react-gesture-gallery";

const image1 =require("../assets/Gaza1.jpg")
const image2 =require("../assets/Gaza3.jpg")
const image3 =require("../assets/couch-.jpg")
const image4 =require("../assets/Gaza_City.JPG")

const images= [image1 ,image2 ,image3 , image4]
const ImageCarousel=()=>{
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        if (index === 4) {
          setIndex(0);
        } else {
          setIndex(index => index + 1);
        }
      }, 3000);
      return () => clearInterval(timer);
    }, [index]);
  
    return (
        <>
      <Gallery
      
    
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      
        style={{
        position: 'absolute',
        left: '0', right:'0',  bottom: '0',
          height: "100vh",
          width: "100vw", 
          zIndex:0
        }}>
        {images.map(image => (
            
          <GalleryImage objectFit="contain" key={image} src={image}  style={{ 
          left: '0', right:'0', bottom: '0', zIndex:0}}/>
        ))}
      </Gallery>

    </>
    );

  }

export default ImageCarousel;
