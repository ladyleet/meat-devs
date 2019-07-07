import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function Feed() {
    return(
        <div>hey
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="meatdevs"
                options={{height: 1600}}
            />
        </div>
    )
}

export default Feed;