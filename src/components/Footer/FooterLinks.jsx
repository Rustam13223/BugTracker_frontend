import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  const links = [
    {
      name: "Terms",
      url: "/terms",
    },
    {
      name: "Privacy",
      url: "/privacy",
    },
    {
      name: "Security",
      url: "/security",
    },
    {
      name: "Contact",
      url: "/contact",
    },
    {
      name: "Help",
      url: "/help",
    },
  ];
  return (
    <>
      {links.map((link) => (
        <Link key={link.name} target="_blank" to={link.url}>
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default FooterLinks;
