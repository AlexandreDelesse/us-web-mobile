import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "./Link";
import MainNavbar from "./MainNavbar";

export default function MainNavbarFacade() {
  const navigate = useNavigate();
  // const { hasLogged } = useContext(UserContext);
  const [showSidePanel, setShow] = useState(false);

  const handleOnNavLinkClick = (link: string, replace: boolean = false) => {
    navigate(link, { replace });
    toggleSidePanel();
  };

  const toggleSidePanel = () => setShow((old) => !old);

  const links: Link[] = [
    { name: "Missions", path: "/" },
    // { name: "regulation", path: "regul", isProtected: true },
  ];

  //TODO: Implement regulation connection
  const filteredLinks: Link[] = true
    ? links
    : links.filter((link) => !link.isProtected);

  return (
    <MainNavbar
      showSidePanel={showSidePanel}
      toggleSidePanel={toggleSidePanel}
      navLinks={filteredLinks}
      onNavLinkClick={handleOnNavLinkClick}
    />
  );
}
