import SubmitIssueForm from "../../components/forms/SubmitIssueForm";
import { useUserContext } from "../../context/userContext";
import NotAuthenticated from "../../components/redirects/NotAuthenticated/NotAuthenticated";
const SubmitIssuePage = () => {
  const { user } = useUserContext();
  if (!user) return <NotAuthenticated />;
  return (
    <div>
      <SubmitIssueForm />
    </div>
  );
};

export default SubmitIssuePage;
