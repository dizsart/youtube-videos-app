import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({list}) => {
   const renderedList =  list.map((video)=>{
        return (
            <VideoItem />
        )
    })
    return (
        <div>{renderedList}</div>
    )
}

export default VideoList;