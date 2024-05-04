import { useRef } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import styles from "./TestimonialSection.module.css";
import testimonials from "@/assets/testimonials";
import Slider from "react-slick";
import Testimonial from "./Testimonial";
import PropTypes from "prop-types";

const TestimonialSection = ({ offset, speed }) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

  return (
    <ParallaxLayer
      offset={offset}
      speed={speed}
      className={styles.testimonialSection}
    >
      <div className={styles.container}>
        <div className={styles.carousel}>
          <Slider ref={sliderRef} {...settings}>
            {testimonials.testimonials.map((testimonial) => (
              <Testimonial testimonial={testimonial} key={testimonial.id} />
            ))}
          </Slider>
        </div>
      </div>
    </ParallaxLayer>
  );
};

TestimonialSection.propTypes = {
  offset: PropTypes.number,
  speed: PropTypes.number,
  options: PropTypes.object,
};

export default TestimonialSection;
