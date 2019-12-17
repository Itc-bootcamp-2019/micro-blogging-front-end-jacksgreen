import React from 'react'
import TweetList from '../TweetList'
import './style.css'
import { getListOfTweets, postTweet } from '../../lib/api';

class CreateTweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweetList: [],
            newTweet: '',
            loading: false
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
            content: newTweet,
            userName: 'gabe',
            date: dateCreated,
        }
        // const tweetArray = [tweetObj, ...tweetList];
        // this.setState({
        //     tweetList: tweetArray
        // })
        // localStorage.setItem('tweetList', JSON.stringify(tweetArray))

        this.pushTweetToServer(tweetObj)
        this.clearInputBox()

    }

    pushTweetToServer = async obj => {
        try {
            this.setState({ loading: true });
            await postTweet(obj);
            this.handleTweets();
        } catch (e) {
            console.log(e)
        }
    }

    clearInputBox() {
        document.getElementById('create-tweet-input-box').value = ''
    }

    componentDidMount() {
        // let savedTweetList = localStorage.getItem('tweetList');
        // savedTweetList = JSON.parse(savedTweetList);
        // this.setState({tweetList: savedTweetList})
        this.handleTweets()
    }

    handleTweets = async () => {
        const savedTweetList = await getListOfTweets();
        this.setState({ tweetList: savedTweetList.data.tweets, loading: false})
    }

    render() {
        const { tweetList, newTweet, loading } = this.state

        return (
            <div className="outer-wrap">
                {loading && <div className='loading'></div>}
                {!loading && <div className='create-tweet-wrapper'>
                    <div className='input-box-wrapper'>
                        <textarea onChange={(event) => this.onTweetChange(event)} id='create-tweet-input-box' placeholder='What do you have in mind?'></textarea>
                        {newTweet.length <= 140 && <button className="submit-tweet-btn" onClick={() => this.onPublishTweet()}>Tweet</button>}
                        {newTweet.length > 140 && <button disabled className="submit-tweet-btn disabled-tweet-btn">Tweet</button>}
                    </div>
                    <TweetList tweetList={tweetList} />
                </div>}
            </div>
        )
    }
}




export default CreateTweet