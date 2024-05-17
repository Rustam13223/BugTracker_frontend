import styles from "./Authenticated.module.css";
import { Link } from "react-router-dom";
import { useUserContext } from "@/context/userContext";

/**
 * Renders a component for authenticated users.
 * Displays a message indicating that the user is already logged in,
 * along with options to navigate to the dashboard or logout.
 * @component
 * @returns {JSX.Element} The rendered Authenticated component.
 */
const Authenticated = () => {
  const { logout } = useUserContext();
  return (
    <div className={styles.container}>
      <h1>You are already logged in</h1>
      <p>
        Go to your <Link to="/dashboard">dashboard</Link>
      </p>
      <p>
        Or{" "}
        <button onClick={() => logout()} className={styles.logOutBtn}>
          logout
        </button>
      </p>
    </div>
  );
};

export default Authenticated;
