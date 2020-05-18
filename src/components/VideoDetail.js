import React from 'react';

const VideoDetail = (video) => {
    if (!video){
        return <div>Loadiing...</div>
    }
    return (
        <div>
            {video.snippet.title}
        </div>
    )
}
export default VideoDetail;