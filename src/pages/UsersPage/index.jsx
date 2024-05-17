import UsersList from "../../components/UsersList/UsersList";
import { useUserContext } from "../../context/userContext";
import NotAuthenticated from "../../components/redirects/NotAuthenticated/NotAuthenticated";

/**
 * Renders the UsersPage component.
 * @returns {JSX.Element} The rendered UsersPage component.
 */

const UsersPage = () => {
  const { user } = useUserContext();
  if (!user) return <NotAuthenticated />;
  return (
    <div>
      <UsersList />
    </div>
  );
};

export default UsersPage;
