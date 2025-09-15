import React, { Component } from "react";
import withLogger from "./withLogger";

// Mock API
function mockFetchUserStatus(userId = 1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userId, status: "Online" });
    }, 900);
  });
}

class UserStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { status: "Unknown", loading: true };
    console.log("[Constructor] UserStatus constructor");
  }

  componentDidMount() {
    console.log("[Mounted] UserStatus class component loaded");

    mockFetchUserStatus(this.props.userId)
      .then((data) => {
        this.setState({ status: data.status, loading: false });
        console.log(`[Fetched] Status: ${data.status}`);
      })
      .catch(() => {
        this.setState({ status: "Error", loading: false });
      });
  }

  render() {
    const { theme } = this.props;
    const { status, loading } = this.state;

    return (
      <div className="user-status-card">
        <h2>User Status (Class)</h2>
        <small>Theme: {theme}</small>
        <div style={{ marginTop: 8 }}>
          <strong>Status:</strong> {loading ? "Loading..." : status}
        </div>
      </div>
    );
  }
}

export default withLogger(UserStatus);



