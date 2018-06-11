import React from "react";
import { Link } from "react-router-dom";

class Settings extends React.Component {
  state = {
    username: localStorage.getItem("username"),
    repository: localStorage.getItem("repository"),
    issueNumber: localStorage.getItem("issueNumber")
  };

  handleChange = target => event => {
    this.setState({
      [target]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username, repository, issueNumber } = this.state;
    localStorage.setItem("username", username);
    localStorage.setItem("repository", repository);
    localStorage.setItem("issueNumber", issueNumber);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <section className="section">
          <h1
            style={{ fontWeight: "bold", fontSize: "2rem", lineHeight: "5rem" }}
          >
            GitHub Issue Settings
          </h1>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label" htmlFor="username">
                Username
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="username"
                  id="username"
                  value={this.state.username || ""}
                  placeholder="Input your GitHub username"
                  onChange={this.handleChange("username")}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="repository">
                Repository
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="repository"
                  id="repository"
                  value={this.state.repository || ""}
                  placeholder="Input your GitHub repository name"
                  onChange={this.handleChange("repository")}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="issueNumber">
                Issue Number
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="issueNumber"
                  id="issueNumber"
                  value={this.state.issueNumber || ""}
                  placeholder="Input your GitHub issue number"
                  onChange={this.handleChange("issueNumber")}
                />
              </div>
            </div>
            <div>
              <span>
                <button type="submit" className="button">
                  Save
                </button>
              </span>
              <span style={{ marginLeft: "1rem" }}>
                <Link to="/" className="button">
                  Cancel
                </Link>
              </span>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default Settings;
