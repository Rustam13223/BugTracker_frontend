import NotAuthenticated from "../../components/redirects/NotAuthenticated/NotAuthenticated";
import { useUserContext } from "../../context/userContext";
const StatisticsPage = () => {
  const { user } = useUserContext();
  if (!user) return <NotAuthenticated />;
  return <div>Statistics Page</div>;
};

export default StatisticsPage;
