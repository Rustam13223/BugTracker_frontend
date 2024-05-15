import AllIssues from "../../components/issues/AllIssues/AllIssues";
import { IssueFilterProvider } from "../../context/issueFilterContext";
import { useUserContext } from "../../context/userContext";
import NotAuthenticated from "../../components/redirects/NotAuthenticated/NotAuthenticated";
const IssuesPage = () => {
  const { user } = useUserContext();
  if (!user) return <NotAuthenticated />;
  return (
    <IssueFilterProvider>
      <AllIssues />
    </IssueFilterProvider>
  );
};

export default IssuesPage;
