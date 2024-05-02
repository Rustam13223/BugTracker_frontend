import React, { useRef } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import styles from "./TestimonialSection.module.css";
import testimonials from "@/assets/testimonials";
import Slider from "react-slick";
import Testimonial from "./Testimonial";
import FadeIn from "@/components/animations/FadeIn";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaArrowLeft className={`${className} ${styles.arrow}`} onClick={onClick} />
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaArrowRight
      className={`${className} ${styles.arrow}`}
      onClick={onClick}
    />
  );
}

const TestimonialSection = ({ offset, speed, options }) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow className={styles.arrow} />,
    prevArrow: <PrevArrow className={styles.arrow} />,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots) => {
      return (
        <div>
          <ul>
            {dots.map((item, index) => {
              return <li key={index}>{item.props.children}</li>;
            })}
          </ul>
        </div>
      );
    },
    dotsClass: styles.dots,
    activeDotClass: styles.activeDot,
  };
  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const goToPrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <ParallaxLayer
      offset={offset}
      speed={speed}
      className={styles.testimonialSection}
    >
      <div className={styles.container}>
        <div className={styles.carousel}>
          <FadeIn from="bottom" duration={1.5}>
            <Slider ref={sliderRef} {...settings}>
              {testimonials.testimonials.map((testimonial) => (
                <Testimonial testimonial={testimonial} key={testimonial.id} />
              ))}
            </Slider>
          </FadeIn>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default TestimonialSection;
