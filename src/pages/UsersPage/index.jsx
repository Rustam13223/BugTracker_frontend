import UsersList from "../../components/UsersList/UsersList";
import { useUserContext } from "../../context/userContext";
import NotAuthenticated from "../../components/redirects/NotAuthenticated/NotAuthenticated";
import Unauthorized from "../../components/redirects/Unathorized/Unauthorized";
/**
 * Renders the UsersPage component.
 * @returns {JSX.Element} The rendered UsersPage component.
 */

const UsersPage = () => {
  const { user } = useUserContext();
  if (!user) return <NotAuthenticated />;
  if (!user.role) return <Unauthorized />;
  return (
    <div>
      <UsersList />
    </div>
  );
};

export default UsersPage;
