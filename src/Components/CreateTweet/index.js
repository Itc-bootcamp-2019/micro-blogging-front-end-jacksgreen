import React from 'react'
import TweetList from '../TweetList'
import './style.css'

class CreateTweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweetList: [],
            newTweet: '',
        }
    }


    onTweetChange(event) {
        this.setState({ newTweet: event.target.value })
    }

    onPublishTweet() {
        const { newTweet, tweetList } = this.state
        let dateCreated = new Date()
        dateCreated = dateCreated.toISOString()
        let tweetObj = {
            username: 'jack',
            tweetContent: newTweet,
            date: dateCreated,
        }
        const tweetArray = [tweetObj, ...tweetList];
        this.setState({
            tweetList: tweetArray
        })
        this.clearInputBox()
        localStorage.setItem('tweetList', JSON.stringify(tweetArray))
        
    }
    
    clearInputBox() {
        document.getElementById('create-tweet-input-box').value = ''
    }

    componentDidMount(){
        let savedTweetList = localStorage.getItem('tweetList');
        savedTweetList = JSON.parse(savedTweetList);
        this.setState({tweetList: savedTweetList})
    }

    render() {
        const { tweetList, newTweet } = this.state
        let disabledButton =
            <div className="disabled-button-wrapper">
                <div>The tweet can't contain more then 140 chars.</div>
                <button disabled className="submit-tweet-btn disabled-tweet-btn">Tweet</button>
            </div>
        return (
            <div className='create-tweet-wrapper'>
                <div className='input-box-wrapper'>
                    <textarea onChange={(event) => this.onTweetChange(event)} id='create-tweet-input-box' placeholder='What do you have in mind?'></textarea>
                    {newTweet.length <= 140 && <button className="submit-tweet-btn" onClick={() => this.onPublishTweet()}>Tweet</button>}
                    {newTweet.length > 140 && <button disabled className="submit-tweet-btn disabled-tweet-btn">Tweet</button>}
                </div>
                <TweetList tweetList={tweetList} />
            </div>
        )
    }
}




export default CreateTweet