import Main from "./../components/Layout/Main";
import Slider from "react-slick";
import React, { useRef } from "react";
import { images } from "../assets/imageExport";
import { v4 as uuidv4 } from "uuid";

export default function Gallerie() {
  const sliderRef = useRef();
  const slider2Ref = useRef();
  const [isElementVisible, setElementVisible] = React.useState(false);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    arrows: false,
    lazyLoad: true,
    draggable: true,
    swipeToSlide: true,
    centerMode: true,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
      },
    }],
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
              style={{ position: "relative" }}
            >
              <button
                className="button is-primary"
                onClick={() => {
                  sliderRef.current.slickPrev();
                  slider2Ref.current.slickPrev();
                }}
                style={{ position: "absolute", bottom: "-50px", left: "50px" }}
              >
                Previous
              </button>
              <button
                style={{ position: "absolute", bottom: "-50px", right: "50px" }}
                className="button is-primary"
                onClick={() => {
                  sliderRef.current.slickNext();
                  slider2Ref.current.slickNext();
                }}
              >
                Next
              </button>

              <Slider
                asNavFor={slider2Ref.current}
                ref={sliderRef}
                {...settings}
              >
                {images.map((item) => (
                  <img src={item} key={uuidv4()} alt="test" />
                ))}
              </Slider>
              <Slider
                asNavFor={sliderRef.current}
                ref={slider2Ref}
                slidesToShow={3}
                focusOnSelect={true}
                swipe={false}
                infinite={true}
                className="is-hidden-mobile"
              >
                {images.map((item) => (
                  <img src={item} key={uuidv4()} alt="test" className="m-10" />
                ))}
              </Slider>
            </div>
          </>
        </div>
      </section>
    </Main>
  );
}
