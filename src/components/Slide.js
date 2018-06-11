import React from "react";
import { Route, Redirect } from "react-router-dom";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Title from "./Title";
import Page from "./Page";

const GET_ISSUE_COMMENTS = gql`
  query comments(
    $repositoryOwner: String!
    $repositoryName: String!
    $issueNumber: Int!
  ) {
    repository(owner: $repositoryOwner, name: $repositoryName) {
      issue(number: $issueNumber) {
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

const Slide = () => {
  const username = localStorage.getItem("username");
  const repository = localStorage.getItem("repository");
  const issueNumber = localStorage.getItem("issueNumber");

  if (!username || !repository || !issueNumber) {
    return <Redirect to="/settings" />;
  }

  return (
    <Query
      query={GET_ISSUE_COMMENTS}
      variables={{
        repositoryOwner: username,
        repositoryName: repository,
        issueNumber: parseInt(issueNumber)
      }}
    >
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        const issue = data.repository.issue;
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
            prevPath = "/slide/";
          } else {
            prevPath = `/slide/${pageNumber - 1}`;
          }

          if (pageNumber === issue.comments.edges.length) {
            nextPath = null;
          } else {
            nextPath = `/slide/${pageNumber + 1}`;
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
              path="/slide"
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
                path={`/slide/${comment.pageNumber}`}
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
      }}
    </Query>
  );
};

export default Slide;
