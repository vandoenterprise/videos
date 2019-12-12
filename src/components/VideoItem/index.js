import React from 'react';
import './style.css';

const TITLE_LENGTH_LIMIT = 40;

const parsedTitle = (title) => {
    if (title.length > TITLE_LENGTH_LIMIT) {
        title = title.substr(0, TITLE_LENGTH_LIMIT) + '...';
    }
    return title;
};

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className="video-item item" onClick={() => onVideoSelect(video)} title={video.snippet.title}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content">
                <div className="header">{parsedTitle(video.snippet.title)}</div>
            </div>
        </div>
    );
};

export default VideoItem;
