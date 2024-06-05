import NotAuthenticated from "../../components/redirects/NotAuthenticated/NotAuthenticated";
import { useUserContext } from "../../context/userContext";
import Stats from "../../components/Stats/Stats";
const StatisticsPage = () => {
  const { user } = useUserContext();
  if (!user) return <NotAuthenticated />;
  return <Stats />;
};

export default StatisticsPage;
