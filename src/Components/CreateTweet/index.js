import React from 'react'
import TweetList from '../TweetList'
import './style.css'


class CreateTweet extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tweetList:[],
            newTweet: '',
        }
    }


    onTweetChange(event){
        this.setState({newTweet: event.target.value})
    }

    onPublishTweet(){
        const { newTweet, tweetList, date } = this.state
        let dateCreated = new Date()
        dateCreated = dateCreated.toISOString()
        let tweetObj = {
            username: 'jack',
            tweetContent: newTweet,
            date: dateCreated,
        }
        this.setState({
            tweetList: [tweetObj, ...tweetList ], 
        })
    }

    render(){
        const { tweetList, newTweet } = this.state
        return (
            <div className='create-tweet-wrapper'>
                <div className='input-box-wrapper'>
                    <textarea onChange ={(event) => this.onTweetChange(event)} className='create-tweet-input-box' placeholder='What do you have in mind?'></textarea>
                    {newTweet.length <= 140 && <button className="submit-tweet-btn" onClick={() => this.onPublishTweet()}>Tweet</button>}
                    {newTweet.length > 140 && <button disabled className="submit-tweet-btn disabled-tweet-btn">Tweet</button>}
                </div>
                <TweetList tweetList={tweetList}/>
            </div>
        )
    }
}




export default CreateTweet