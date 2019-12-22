import React from "react";
import "./style.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: "",
      changeProfile: false,
      validUserName: true
    };
  }

  onProfileChange(event) {
      this.setState({ profile: event.target.value });
  }

  setProfile() {
    const { profile } = this.state
    if (profile.length > 0){
      this.setState({validUserName: true})
      localStorage.setItem("profile", JSON.stringify(profile));
      this.setState({ changeProfile: true });
      setTimeout(() => {
        this.setState({ changeProfile: false });
      }, 1000);
    } else {
      localStorage.setItem("profile", JSON.stringify(profile));
      this.setState({validUserName: false})
    }
  }
  
  render() {
    const { changeProfile, validUserName } = this.state;
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
            { !validUserName && <div className='profile-username-error'>Please set a valid username</div>}
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
