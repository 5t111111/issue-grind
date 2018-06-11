import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const username = localStorage.getItem("username");
  const repository = localStorage.getItem("repository");
  const issueNumber = localStorage.getItem("issueNumber");

  return (
    <div>
      {username && repository && issueNumber ? (
        <Link to="/slide">Show Slide</Link>
      ) : null}
      <Link to="/settings">Settings</Link>
    </div>
  );
};

export default Home;
