import React from "react";
import "./style.css";

class TweetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { tweetList } = this.props;
    return tweetList.map(tweet => (
      <div key={tweet.date} className="new-tweet-bg">
        <div className="tweet-info">
          <div className="tweet-info-text">{tweet.userName}</div>
          <div className="tweet-info-text">{tweet.date}</div>
        </div>
        <div className="new-tweet-content">{tweet.content}</div>
      </div>
    ));
  }
}

export default TweetList;
