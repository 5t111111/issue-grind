import React from "react";

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
      <div>
        <div>
          <h1>Issue Settings</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="username">GitHub Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={this.state.username || ""}
                onChange={this.handleChange("username")}
              />
            </div>
            <div>
              <label htmlFor="repository">GitHub Repository</label>
              <input
                type="text"
                name="repository"
                id="repository"
                value={this.state.repository || ""}
                onChange={this.handleChange("repository")}
              />
            </div>
            <div>
              <label htmlFor="issueNumber">Issue Number</label>
              <input
                type="text"
                name="issueNumber"
                id="issueNumber"
                value={this.state.issueNumber || ""}
                onChange={this.handleChange("issueNumber")}
              />
            </div>
            <div>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Settings;
