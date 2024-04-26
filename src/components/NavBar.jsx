/* eslint-disable react/prop-types */
import { Button, Typography } from "@mui/joy";
import { Link } from "react-router-dom";

export default function NavBar({ userData, authorised, setAuthorised }) {
  function logout() {
    localStorage.removeItem("userData");
    setAuthorised(false);
  }
  return (
    <div
      style={{
        padding: "0 40px",
        boxSizing: "border-box",
        backgroundColor: "#464646",
        width: "100%",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography marginRight="20px" level="h2">
          <Link to="/">Bug Tracker</Link>
        </Typography>
        <Typography marginX="10px" level="body-lg">
          <Link to="/issues">Issues</Link>
        </Typography>
        <Typography marginX="10px" level="body-lg">
          <Link to="/report">Report</Link>
        </Typography>
      </div>

      {authorised ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography marginX="20px" level="body-lg">
            {userData.email}
          </Typography>
          <Button onClick={logout}>Logout</Button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
