import React from "react";
import { Link } from "react-router-dom";

const NavbarLinks = () => {
  const links = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "All Issues",
      path: "/all-issues",
    },
    {
      name: "Users",
      path: "/users",
    },
    {
      name: "Statistics",
      path: "/stats",
    },
  ];
  return (
    <>
      {links.map((link) => (
        <li key={link.path}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </>
  );
};

export default NavbarLinks;
