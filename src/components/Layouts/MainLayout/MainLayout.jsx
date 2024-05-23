import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import styles from "./MainLayout.module.css";
import { Outlet } from "react-router-dom";
import SlideIn from "../../animations/SlideIn";

/**
 * MainLayout component represents the main layout of the application.
 * It includes a navbar, main content area, and a footer.
 */
const MainLayout = () => {
  return (
    <div className={styles.container}>
      <SlideIn
        from="top"
        styles={{ width: "100%", position: "sticky", top: "0", zIndex: "100" }}
        once={true}
      >
        <Navbar />
      </SlideIn>
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
