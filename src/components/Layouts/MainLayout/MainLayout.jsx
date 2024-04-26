import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import styles from "./MainLayout.module.css";

const MainLayout = ({ children }) => {
  return (
    <main className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
