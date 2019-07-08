import React from 'react';
import { TwitterTimelineEmbed, TwitterFollowButton, TwitterShareButton } from 'react-twitter-embed';

function Feed() {
    return(
        <div>
            <h2>Feed</h2>
            <TwitterShareButton
                url={'https://github.com/ladyleet/meat-devs'}
                options={{ text: 'I rarely meat a site I tweet about, but it would be a missed steak if I didnt share Meat Devs!'}}
            />
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="meatdevs"
                options={{height: 2000}}
            />
        </div>
    )
}

export default Feed;