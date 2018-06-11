import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const username = localStorage.getItem("username");
  const repository = localStorage.getItem("repository");
  const issueNumber = localStorage.getItem("issueNumber");

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "15vw" }}>ISSUE GRIND</h1>
      {username && repository && issueNumber ? (
        <div>
          <Link
            to="/slide"
            className="button is-medium"
            style={{ width: "50vw" }}
          >
            Show Slide
          </Link>
        </div>
      ) : null}
      <div style={{ marginTop: "20px" }}>
        <Link
          to="/settings"
          className="button is-medium"
          style={{ width: "50vw" }}
        >
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Home;
