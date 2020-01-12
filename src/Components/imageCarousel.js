import React, { useRef, useEffect } from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";

import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const image1 = require("../assets/Gaza1.jpg");
const image2 = require("../assets/Gaza3.jpg");
const image3 = require("../assets/couch-.jpg");
const image4 = require("../assets/Gaza_City.JPG");

const images = [image1, image2, image3, image4];
let timer;

const ImageCarousel = () => {
  // let image = useRef(null);
  // let container = useRef(null);
  // let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  // let tl = new TimelineLite();

  // useEffect(() => {
  //   tl.to(container, 0, { css: { visibility: "visible" } });
  //   tl.to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut });
  //   tl.from(image, 1.4, {
  //     x: 300,
  //     ease: Power2.easeInOut,
  //     delay: -1.4
  //   });
  // });
  
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    timer = setInterval(() => {
      if (index === 4) {
        setIndex(0);
      } else {
        setIndex(index => index + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  useEffect(() => {
    return () => {
      console.log("cleaned up");
      clearInterval(timer);
    };
  }, []);

  return (
    <Gallery
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
      style={{
        position: "absolute",
        left: "0",
        right: "0",
        bottom: "0",
        height: "100vh",
        width: "100vw",
        zIndex: 0
      }}
    >
      {images.map((image, index) => (
        <GalleryImage
          objectFit="contain"
          key={index}
          src={image}
          className=""
          style={{
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: 0
          }}
          ref={el => {
            image = el;
          }}
        />
      ))}
    </Gallery>
  );
};

ImageCarousel.componentWillMount = props => {
  console.log(images);
};

export default ImageCarousel;
