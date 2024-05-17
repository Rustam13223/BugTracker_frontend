import UsersList from "../../components/UsersList/UsersList";
import { useUserContext } from "../../context/userContext";
import NotAuthenticated from "../../components/redirects/NotAuthenticated/NotAuthenticated";
const UsersPage = () => {
  const { user } = useUserContext();
  if (!user) return <NotAuthenticated />;
  return (
    <div>
      <h1>Users Page</h1>
      <UsersList />
    </div>
  );
};

export default UsersPage;
