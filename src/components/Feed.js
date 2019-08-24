import React from 'react';
import '../styles/feed.css';
import { TwitterTimelineEmbed, TwitterFollowButton, TwitterShareButton } from 'react-twitter-embed';

const Feed = () => {
    return(
        <>
        <h2>Feed</h2>
            <div className='feed-tweets'>
                <TwitterShareButton
                    url={'https://github.com/ladyleet/meat-devs'}
                    options={{ text: 'I rarely meat a site I tweet about, but it would be a missed steak if I didnt share Meat Devs!'}}
                />
                <TwitterFollowButton
                    screenName={'meatdevs'}
                />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="meatdevs"
                    options={{height: 2000}}
                />
            </div>
        </>
    )
}

export default Feed;