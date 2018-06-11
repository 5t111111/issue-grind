import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Title = ({ title, authorLogin, authorAvatarUrl, bodyHTML }) => (
  <Fragment>
    <h1 className="title">{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
    <div>
      <h4>{authorLogin}</h4>
      <img src={authorAvatarUrl} />
    </div>
    <Link to="/slide/1">START</Link>
  </Fragment>
);

export default Title;
