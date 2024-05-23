import React from "react";
import { Link } from "react-router-dom";
/**
 * Renders a component to display a message when the user is not authenticated.
 *
 * @component
 * @returns {JSX.Element} The rendered NotAuthenticated component.
 */
const NotAuthenticated = () => {
  return (
    <div>
      <h1>You need to be logged in to view this page</h1>
      <p>
        Login <Link to="/login">Here</Link>
      </p>
      <p>
        Or <Link to="/register">Create an account</Link>
      </p>
    </div>
  );
};

export default NotAuthenticated;
