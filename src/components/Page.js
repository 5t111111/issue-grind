import React from "react";
import { Link } from "react-router-dom";
import "./slide.css";

const Page = ({ bodyHTML, pageNumber, prevPath, nextPath }) => (
  <div className="page" style={{ padding: "0.5em" }}>
    <div style={{ minHeight: "calc(100vh - 10vh - 5vh)" }}>
      <h4 className="page-info">Page: {pageNumber}</h4>
      <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
    </div>
    <div
      style={{
        height: "10vh",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      {prevPath ? <Link to={prevPath}> ⏪ </Link> : null}
      {nextPath ? <Link to={nextPath}> ⏩ </Link> : null}
    </div>
  </div>
);

export default Page;
