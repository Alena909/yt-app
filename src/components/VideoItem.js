import React from "react";

const VideoItem = ({ videoItem, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(videoItem)}>
      <img
        src={videoItem.snippet.thumbnails.medium.url}
        alt={videoItem.snippet.title}
        className="ui image"
      />
      <div className="content">
        <div className="header">{videoItem.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
