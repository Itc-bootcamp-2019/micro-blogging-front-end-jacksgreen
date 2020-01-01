import React from 'react';
import TweetList from '../TweetList';
import './style.css';
import {
  getListOfTweets,
  postTweet,
  getListOfTweetsFirebase
} from '../../lib/api';
import { db, auth } from '../../config/fbConfig';

class FirebaseHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetList: [],
      newTweet: '',
      loading: true,
      validUserName: false,
      username: ''
    };
  }

  onTweetChange(event) {
    this.setState({ newTweet: event.target.value });
  }

  onPublishTweet() {
    const { newTweet, tweetList, validUserName } = this.state;
    let dateCreated = new Date();
    dateCreated = dateCreated.toISOString();
    let profile = localStorage.getItem('profile');
    profile = JSON.parse(profile);
    if (!validUserName) {
      console.log('nope');
      return;
    }
    let tweetObj = {
      content: newTweet,
      userName: profile,
      date: dateCreated
    };
    this.pushTweetToFirebase(tweetObj);
    this.clearInputBox();
  }

  pushTweetToFirebase(tweet) {
    db.collection('AllTweets')
      .add(tweet)
      .then(function(docRef) {
        console.log('document written with ID: ', docRef.id);
      })
      .catch(function(error) {
        console.log('error adding document: ', error);
      });
  }

  clearInputBox() {
    document.getElementById('create-tweet-input-box').value = '';
  }

  componentDidMount() {
    let profile = localStorage.getItem('profile');
    profile = JSON.parse(profile);
    if (profile.length > 0) {
      this.setState({ validUserName: true });
    }
    this.firebaseListener();
  }

  firebaseListener() {
    let savedTweetList = [];
    db.collection('AllTweets')
      .orderBy('date')
      .onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
          savedTweetList.unshift(change.doc.data());
        });
        this.setState({
          loading: false,
          tweetList: savedTweetList
        });
      });
  }

  render() {
    const { tweetList, newTweet, loading, charMax, validUserName } = this.state;
    const { isSignedIn } = this.props;

    let error = (
      <div>
        <div className='error-text'>
          {' '}
          The tweet can't contain more than 140 chars.{' '}
        </div>
        <button disabled id='disabled-tweet-btn'>
          Tweet
        </button>
      </div>
    );

    let signInText = (
      <div className='outer-wrap-login-request'>
        Please Log in to access tweets
      </div>
    );

    return (
      <div>
        {!isSignedIn && signInText}
        {isSignedIn && (
          <div className='outer-wrap'>
            {loading && <div className='loading'></div>}
            {!loading && (
              <div className='create-tweet-wrapper'>
                <div className='input-box-wrapper'>
                  <textarea
                    onChange={event => this.onTweetChange(event)}
                    id='create-tweet-input-box'
                    placeholder='What do you have in mind?'
                  ></textarea>
                  {!validUserName && (
                    <div className='username-error'>
                      Please set a valid username
                    </div>
                  )}
                  {newTweet.length <= 140 && (
                    <button
                      disabled={charMax}
                      id='submit-tweet-btn'
                      onClick={() => this.onPublishTweet()}
                    >
                      Tweet
                    </button>
                  )}
                  {newTweet.length > 140 && error}
                </div>
                <TweetList tweetList={tweetList} />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default FirebaseHomePage;
