import AllIssues from "../../components/issues/AllIssues/AllIssues";
import { IssueFilterProvider } from "../../context/issueFilterContext";
import { useUserContext } from "../../context/userContext";
import NotAuthenticated from "../../components/redirects/NotAuthenticated/NotAuthenticated";
import Unauthorized from "../../components/redirects/Unathorized/Unauthorized";
/**
 * Renders the IssuesPage component.
 *
 * @returns {JSX.Element} The rendered IssuesPage component.
 */

const IssuesPage = () => {
  const { user } = useUserContext();
  if (!user) return <NotAuthenticated />;
  if (!user.role) return <Unauthorized />;
  return (
    <IssueFilterProvider>
      <AllIssues />
    </IssueFilterProvider>
  );
};

export default IssuesPage;
