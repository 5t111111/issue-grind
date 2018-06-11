import React from "react";
import { Route } from "react-router-dom";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Title from "./components/Title";
import Page from "./components/Page";

const query = gql`
  {
    repository(owner: "yochiyochirb", name: "meetups") {
      issue(number: 1393) {
        title
        bodyHTML
        author {
          login
          avatarUrl
        }
        comments(first: 100) {
          edges {
            node {
              id
              bodyHTML
            }
          }
        }
      }
    }
  }
`;

const App = ({ data: { loading, repository } }) => {
  if (loading) return <p>Loading...</p>;

  const issue = repository.issue;
  const title = issue.title;
  const authorLogin = issue.author.login;
  const authorAvatarUrl = issue.author.avatarUrl;
  const bodyHTML = issue.bodyHTML;

  let prevPath = null;
  let nextPath = null;
  let comments = [];

  for (const index of issue.comments.edges.keys()) {
    const pageNumber = index + 1;
    if (pageNumber === 1) {
      prevPath = "/";
    } else {
      prevPath = `/${pageNumber - 1}`;
    }

    if (pageNumber === issue.comments.edges.length) {
      nextPath = null;
    } else {
      nextPath = `/${pageNumber + 1}`;
    }

    comments.push({
      ...issue.comments.edges[index],
      pageNumber: pageNumber,
      prevPath: prevPath,
      nextPath: nextPath
    });
  }

  return (
    <div>
      <Route
        exact
        path="/"
        render={props => (
          <Title
            title={title}
            authorLogin={authorLogin}
            authorAvatarUrl={authorAvatarUrl}
            bodyHTML={bodyHTML}
            {...props}
          />
        )}
      />
      {comments.map(comment => (
        <Route
          key={comment.pageNumber}
          path={`/${comment.pageNumber}`}
          render={props => (
            <Page
              bodyHTML={comment.node.bodyHTML}
              pageNumber={comment.pageNumber}
              prevPath={comment.prevPath}
              nextPath={comment.nextPath}
              {...props}
            />
          )}
        />
      ))}
    </div>
  );
};

export default graphql(query)(App);
