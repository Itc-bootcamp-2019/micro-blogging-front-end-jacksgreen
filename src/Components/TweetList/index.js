import React from 'react'
import './style.css'

class TweetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'jack',
            newTweet: 'On the technical side, Microsoft says the Xbox Series X can handle 4K visuals at 60 frames per second, and potentially up to 120FPS.'
        }
    }
    render() {
        const { username, newTweet } = this.state;
        return (
            <div className="new-tweet-bg">
                <div className='tweet-info'>
                    <div className='tweet-info-text'>{username}</div>
                    <div className='tweet-info-text'>2019-12-15T14:40:58.340Z</div>
                </div>
                <div className='new-tweet-content'>{newTweet}</div>
            </div>
        )
    }
}

export default TweetList