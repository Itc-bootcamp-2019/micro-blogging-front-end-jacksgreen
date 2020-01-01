import React from 'react';
import './style.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class FirebaseLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  uiConfig = {
    // signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
      //   firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  signOut = () => {
    firebase.auth().signOut();
  };

  render() {
    const { isSignedIn } = this.props;
    return (
      <div className='login-wrap'>
        {isSignedIn ? (
          <div className='sign-in-items'>
            <div className='welcome-text'>
              Welcome {firebase.auth().currentUser.displayName}
            </div>
            <button className='sign-out-button' onClick={this.signOut}>
              Sign out
            </button>
            <img
              className='sign-in-image'
              alt='profile picture'
              src={firebase.auth().currentUser.photoURL}
            />
          </div>
        ) : (
          <div className='sign-in-button'>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        )}
      </div>
    );
  }
}

export default FirebaseLogin;
