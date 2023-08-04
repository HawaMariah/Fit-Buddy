import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const showSidebarPaths = ["/"];

  const shouldShowSidebar = () => showSidebarPaths.includes(location.pathname);

  return shouldShowSidebar() ? (
    <div className="sidebar">
      <div className="side fitness">
        <Link to="/hero">Fitness</Link>
      </div>
      <div className="side nutrition">
        <Link to="/fittype">Nutrition</Link>
      </div>
      <div className="side article">
        <Link to="/articles">Articles</Link>
      </div>
    </div>
  ) : null;
};

export default Sidebar;
