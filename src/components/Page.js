import React from "react";
import { Link } from "react-router-dom";

const Page = ({ bodyHTML, pageNumber, prevPath, nextPath }) => (
  <div>
    <h3>Page: {pageNumber}</h3>
    <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
    {prevPath ? <Link to={prevPath}>＜＝</Link> : null}
    {nextPath ? <Link to={nextPath}>＝＞</Link> : null}
  </div>
);

export default Page;
