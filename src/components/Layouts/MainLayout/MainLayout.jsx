import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import styles from "./MainLayout.module.css";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
