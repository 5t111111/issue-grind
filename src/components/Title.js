import React from "react";
import { Link } from "react-router-dom";
import "./slide.css";

const Title = ({ title, authorLogin, authorAvatarUrl, bodyHTML }) => (
  <div
    className="page"
    style={{
      backgroundImage: `url(${authorAvatarUrl})`,
      backgroundSize: "cover"
    }}
  >
    <div className="cover">
      <h1 className="title">{title}</h1>
      <div
        className="subtitle"
        dangerouslySetInnerHTML={{ __html: bodyHTML }}
      />
      <div className="avatar">
        <span>{authorLogin}</span>
      </div>
      <Link to="/slide/1">START</Link>
    </div>
  </div>
);

export default Title;
