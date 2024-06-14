import NotAuthenticated from "../../components/redirects/NotAuthenticated/NotAuthenticated";
import { useUserContext } from "../../context/userContext";
import Stats from "../../components/Stats/Stats";
import Unauthorized from "../../components/redirects/Unathorized/Unauthorized";
/**
 * Renders the StatisticsPage component.
 * @returns {JSX.Element} The rendered StatisticsPage component.
 */
const StatisticsPage = () => {
  const { user } = useUserContext();
  if (!user) return <NotAuthenticated />;
  if (!user.role) return <Unauthorized />;
  return <Stats />;
};

export default StatisticsPage;
