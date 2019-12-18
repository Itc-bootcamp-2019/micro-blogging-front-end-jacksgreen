import React from "react";
import "./style.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: "",
      changeProfile: false
    };
  }

  onProfileChange(event) {
    this.setState({ profile: event.target.value });
  }

  setProfile() {
    localStorage.setItem("profile", JSON.stringify(this.state.profile));
    this.setState({ changeProfile: true });
    setTimeout(() => {
      this.setState({ changeProfile: false });
    }, 1000);
  }
  
  render() {
    const { changeProfile } = this.state;
    let profile = localStorage.getItem("profile");
    profile = JSON.parse(profile);
    return (
      <div className="profile-wrapper">
        <div className="profile-header">Profile</div>
        <div className="profile-input-wrapper">
          <div className="profile-username">Username</div>
          <div className="profile-input-border">
            <textarea
              onChange={event => this.onProfileChange(event)}
              placeholder={profile}
              className="profile-input"
            ></textarea>
            {changeProfile && (
              <div className="updated-username">Username updated</div>
            )}
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
