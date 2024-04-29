import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import styles from "./HeroSection.module.css";
import SlideIn from "@/components/animations/SlideIn";
import { useOnScreen } from "@/hooks/useOnScreen";
import BugtrackerSvg from "@/assets/BugtrackerSvg";
import { Link } from "react-router-dom";

const HeroSection = ({ options }) => {
  const [ref, isVisible] = useOnScreen(options);
  return (
    <>
      <ParallaxLayer offset={0} speed={0.5} className={styles.heroSection}>
        <div
          className={styles.container}
          ref={ref}
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          <SlideIn key={isVisible} from="left" duration="700">
            <div className={styles.img}>
              <BugtrackerSvg className={styles.img} size={"100%"} />
            </div>
          </SlideIn>

          <div className={styles.description}>
            <SlideIn key={isVisible + "1"} from="right" delay={200}>
              <h1>Streamline Your Development with Precision Bug Tracking</h1>
            </SlideIn>
            <SlideIn
              key={isVisible + "2"}
              from="right"
              duration="700"
              delay={300}
            >
              <h2>
                Identify, track, and resolve software bugs faster than ever with
                BugTracker, the ultimate tool for enhancing your team's
                productivity and software quality.
              </h2>
            </SlideIn>
            <SlideIn
              key={isVisible + "3"}
              from="right"
              duration="700"
              delay={400}
            >
              <Link to="/register">
                <button className={styles.button}>Create a free account</button>
              </Link>
            </SlideIn>
            <SlideIn
              key={isVisible + "4"}
              from="right"
              duration="700"
              delay={500}
            >
              <p>
                Designed for agility and precision, BugTracker integrates
                seamlessly with your development workflow, enabling real-time
                collaboration and comprehensive issue management. From startups
                to enterprise-scale operations, harness the power of effective
                bug tracking to deliver flawless software solutions.
              </p>
            </SlideIn>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default HeroSection;
