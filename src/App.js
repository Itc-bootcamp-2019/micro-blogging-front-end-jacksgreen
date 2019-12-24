import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Profile from './Components/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import FirebaseHomePage from './Components/FirebaseHomePage';
import FirebaseLogin from './Components/FirebaseLogin';
import firebase from 'firebase';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false
    };
  }

  componentDidMount = () => {
    this.changeLogIn();
  };

  changeLogIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      console.log('user', user);
      console.log(this.state.isSignedIn);
    });
  };

  render() {
    return (
      <div className='main-wrapper'>
        <Router>
          <NavBar isSignedIn={this.state.isSignedIn} />

          <Switch>
            <Route exact path='/'>
              {/* <HomePage /> */}
              <FirebaseHomePage isSignedIn={this.state.isSignedIn} />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route path='/login'>
              <FirebaseLogin
                isSignedIn={this.state.isSignedIn}
                changeLogIn={this.changeLogIn}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
