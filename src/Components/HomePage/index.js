import React from "react";
import TweetList from "../TweetList";
import "./style.css";
import { getListOfTweets, postTweet } from "../../lib/api";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetList: [],
      newTweet: "",
      loading: true,
      validUserName: false,
    };
  }

  onTweetChange(event) {
    this.setState({ newTweet: event.target.value });
  }

  onPublishTweet() {
    const { newTweet, tweetList, validUserName } = this.state;
    let dateCreated = new Date();
    dateCreated = dateCreated.toISOString();
    let profile = localStorage.getItem("profile");
    profile = JSON.parse(profile);
    if (!validUserName){
      console.log('nope')
      return
    }
    let tweetObj = {
      content: newTweet,
      userName: profile,
      date: dateCreated
    };
    this.pushTweetToServer(tweetObj);
    this.setState({tweetList: [tweetObj,...tweetList]})
    this.clearInputBox();
  }

  pushTweetToServer = async obj => {
    try {
      await postTweet(obj);
    } catch (e) {
      console.log(e);
    }
  };

  clearInputBox() {
    document.getElementById("create-tweet-input-box").value = "";
  }

  componentDidMount() {
    this.getTweets();
    setInterval(() => this.getTweets(), 10000);
    let profile = localStorage.getItem("profile");
    profile = JSON.parse(profile);
    if (profile.length > 0){
      this.setState({validUserName: true})
    }
  }

  getTweets = async () => {
    const savedTweetList = await getListOfTweets();
    this.setState({ tweetList: savedTweetList.data.tweets, loading: false });
  };

  render() {
    const { tweetList, newTweet, loading, charMax, validUserName } = this.state;

    let error = (
      <div>
        <div className="error-text">
          {" "}
          The tweet can't contain more than 140 chars.{" "}
        </div>
        <button disabled id="disabled-tweet-btn">
          Tweet
        </button>
      </div>
    );

    return (
      <div className="outer-wrap">
        {loading && <div className="loading"></div>}
        {!loading && (
          <div className="create-tweet-wrapper">
            <div className="input-box-wrapper">
              <textarea
                onChange={event => this.onTweetChange(event)}
                id="create-tweet-input-box"
                placeholder="What do you have in mind?"
              ></textarea>
              { !validUserName && <div className='username-error'>Please set a valid username</div>}
              {newTweet.length <= 140 && (
                <button
                  disabled={charMax}
                  id="submit-tweet-btn"
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
    );
  }
}

export default HomePage;
