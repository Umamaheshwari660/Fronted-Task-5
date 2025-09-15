import React, { Component } from "react";
import withLogger from "./withLogger";

class UserStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { status: "Offline" };
  }

  toggleStatus = () => {
    this.setState((prev) => ({
      status: prev.status === "Online" ? "Offline" : "Online"
    }));
  };

  render() {
    const { theme } = this.props;
    const { status } = this.state;

    return (
      <div className="user-status-card">
        <h2>User Status (Class)</h2>
        <small>Theme: {theme}</small>
        <div style={{ marginTop: 8 }}>
          <strong>Status:</strong> {status}
        </div>
        <button className="status-btn" onClick={this.toggleStatus}>
          Go {status === "Online" ? "Offline" : "Online"}
        </button>
      </div>
    );
  }
}

export default withLogger(UserStatus);




