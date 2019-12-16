import React from 'react'
import TweetList from '../TweetList'
import './style.css'


function CreateTweet() {
    return (
        <div className='create-tweet-wrapper'>
            <div className='input-box-wrapper'>
                <textarea className='create-tweet-input-box' placeholder='What do you have in mind?'></textarea>
                <button>Tweet</button>
            </div>
            <TweetList/>
        </div>
    )
}

export default CreateTweet