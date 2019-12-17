import React from "react";
import "./style.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: ""
    };
  }

  onProfileChange(event) {
    this.setState({ profile: event.target.value });
  }

  setProfile() {
    localStorage.setItem("profile", JSON.stringify(this.state.profile));
  }

  componentDidMount() {
    document.getElementById("homeButton").classList.remove("selected");
    document.getElementById("profileButton").classList.add("selected");
  }

  render() {
    return (
      <div className="profile-wrapper">
        <div className="profile-header">Profile</div>
        <div className="profile-input-wrapper">
          <div className="profile-username">Username</div>
          <div className="profile-input-border">
            <textarea
              onChange={event => this.onProfileChange(event)}
              placeholder="username"
              className="profile-input"
            ></textarea>
          </div>
          <button onClick={() => this.setProfile()} className="profile-save">
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default Profile;
