import styles from "./Dashboard.module.css";
import { useUserContext } from "../../context/userContext";
import NotAuthenticated from "../../components/redirects/NotAuthenticated/NotAuthenticated";
import AssignedForUser from "../../components/issues/DashboardIssues/AssignedForUser";
import CreatedByUser from "../../components/issues/DashboardIssues/CreatedByUser";

function Dashboard() {
  const { user } = useUserContext();
  if (!user) return <NotAuthenticated />;
  return (
    <div className={styles.container}>
      <h2>Welcome {user.firstName}</h2>
      <div className={styles.content}>
        <div className={styles.section}>
          <AssignedForUser />
        </div>
        <div className={styles.section}>
          <CreatedByUser />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
