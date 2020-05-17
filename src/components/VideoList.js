import React from 'react';

const VideoList = (props) => {
    return (
        <div>VideoList
            <div>We found {props.list.length} videos</div>
        </div>
    )
}

export default VideoList;