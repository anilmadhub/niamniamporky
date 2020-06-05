import Main from "./../components/Layout/Main";
import Slider from "react-slick";
import React, { useRef } from "react";
import { images } from "../assets/imageExport";
import AnimateOnScroll from "../functions/AnimateOnScroll";
import { v4 as uuidv4 } from "uuid";

export default function Gallerie() {
  const sliderRef = useRef();
  const [isElementVisible, setElementVisible] = React.useState(true);
  const domRef = React.useRef();
  AnimateOnScroll(domRef, setElementVisible);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    arrows: false,
    autoplay: true,
    lazyLoad: true,
    swipeToSlide: true,
    centerMode: true,
    fade: true,
  };
  return (
    <Main>
      <section className="section" id="accueil">
        <div className="container">
          <>
            <h1 className="title has-text-centered">Gallerie</h1>
            <div
              className={`slider-container ${
                isElementVisible && "animated animatedFadeInUp fadeInUp"
              }`}
              ref={domRef}
              style={{ position: "relative" }}
            >
              <button
                className="button is-primary"
                onClick={() => sliderRef.current.slickPrev()}
                style={{ position: "absolute", bottom: "-40px", left: "50px" }}
              >
                Previous
              </button>
              <button
                style={{ position: "absolute", bottom: "-40px", right: "50px" }}
                className="button is-primary"
                onClick={() => sliderRef.current.slickNext()}
              >
                Next
              </button>

              <Slider
                ref={sliderRef}
                {...settings}
                className={`${
                  isElementVisible && "animated animatedFadeInUp fadeInUp"
                }`}
              >
                {images.map((item) => (
                  <div

                    className="box has-background-white-ter is-shadowless"
                    key={uuidv4()}
                  >
                    <img
                      src={item}
                      key={uuidv4()}
                      alt="test"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </>
        </div>
      </section>
    </Main>
  );
}
