import { ParallaxLayer } from "@react-spring/parallax";
import styles from "./HeroSection.module.css";
import SlideIn from "@/components/animations/SlideIn";
import BugtrackerSvg from "@/assets/BugtrackerSvg";
import { Link } from "react-router-dom";

/**
 * Renders the HeroSection component.
 *
 * @param {Object} props - The component props.
 * @param {number} props.offset - The offset value for the ParallaxLayer.
 * @param {number} props.speed - The speed value for the ParallaxLayer.
 * @returns {JSX.Element} The rendered HeroSection component.
 */
const HeroSection = ({ offset, speed }) => {
  return (
    <>
      <ParallaxLayer
        offset={offset}
        speed={speed}
        className={styles.heroSection}
      >
        <div className={styles.container}>
          <>
            <SlideIn from="left">
              <div className={styles.img}>
                <BugtrackerSvg className={styles.img} size={"100%"} />
              </div>
            </SlideIn>

            <div className={styles.description}>
              <SlideIn from="right" delay={0.2}>
                <h1>Streamline Your Development with Precision Bug Tracking</h1>
              </SlideIn>
              <SlideIn from="right" delay={0.3}>
                <h2>
                  Identify, track, and resolve software bugs faster than ever
                  with BugTracker, the ultimate tool for enhancing your
                  team&apos;s productivity and software quality.
                </h2>
              </SlideIn>
              <SlideIn from="right" delay={0.4}>
                <Link to="/register">
                  <button className={styles.button}>
                    Create a free account
                  </button>
                </Link>
              </SlideIn>
              <SlideIn from="right" delay={0.5}>
                <p>
                  Designed for agility and precision, BugTracker integrates
                  seamlessly with your development workflow, enabling real-time
                  collaboration and comprehensive issue management. From
                  startups to enterprise-scale operations, harness the power of
                  effective bug tracking to deliver flawless software solutions.
                </p>
              </SlideIn>
            </div>
          </>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default HeroSection;
