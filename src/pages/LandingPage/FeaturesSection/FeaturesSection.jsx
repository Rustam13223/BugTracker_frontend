import { ParallaxLayer } from "@react-spring/parallax";
import styles from "./FeaturesSection.module.css";
import SlideIn from "@/components/animations/SlideIn";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiFlowChart } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiUsersThreeLight } from "react-icons/pi";

/**
 * Renders the FeaturesSection component.
 *
 * @param {Object} props - The component props.
 * @param {number} props.offset - The offset value for the ParallaxLayer.
 * @param {number} props.speed - The speed value for the ParallaxLayer.
 * @returns {JSX.Element} The rendered FeaturesSection component.
 */
const FeaturesSection = ({ offset, speed }) => {
  return (
    <ParallaxLayer
      offset={offset}
      speed={speed}
      className={styles.featuresSection}
    >
      <div className={styles.container}>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <SlideIn from="left" duration={0.9}>
              <div className={styles.featureDesc}>
                <h2>Real-Time Issue Tracking</h2>
                <p className={styles.p}>
                  Capture and monitor bugs in real time as they happen. Our
                  dashboard updates instantly to show the latest issues,
                  ensuring nothing slips through the cracks.
                </p>
              </div>
            </SlideIn>
            <SlideIn from="right" duration={0.9} className={styles.featureIcon}>
              <AiOutlineDashboard className={styles.icon} />
            </SlideIn>
          </div>
          <div className={styles.feature}>
            <SlideIn from="left" duration={0.9}>
              <div className={styles.featureDesc}>
                <h2>Advanced Filtering and Search</h2>
                <p className={styles.p}>
                  Quickly find exactly what you’re looking for with powerful
                  search tools and filters that can sort by date, severity,
                  status, or custom tags.
                </p>
              </div>
            </SlideIn>
            <SlideIn from="right" duration={0.9} className={styles.featureIcon}>
              <RiFlowChart className={styles.icon} />
            </SlideIn>
          </div>
          <div className={styles.feature}>
            <SlideIn from="left" duration={0.9}>
              <div className={styles.featureDesc}>
                <h2>Automated Notifications</h2>
                <p className={styles.p}>
                  Stay informed with automatic notifications. Get updates via
                  email or directly through integrated communication tools when
                  a bug is reported or resolved.
                </p>
              </div>
            </SlideIn>
            <SlideIn from="right" duration={0.9} className={styles.featureIcon}>
              <IoIosNotificationsOutline className={styles.icon} />
            </SlideIn>
          </div>
          <div className={styles.feature}>
            <SlideIn from="left" duration={0.9} className={styles.featureDesc}>
              <div className={styles.featureDesc}>
                <h2>Role-Based Access Control</h2>
                <p className={styles.p}>
                  Ensure sensitive information remains secure with configurable
                  access controls that allow you to manage who can view or edit
                  issues.
                </p>
              </div>
            </SlideIn>
            <SlideIn from="right" duration={0.9} className={styles.featureIcon}>
              <PiUsersThreeLight className={styles.icon} />
            </SlideIn>
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default FeaturesSection;
