import React from 'react';

const VideoDetails = ({ video }) => {
    if (!video) {
        return <div>loading...</div>;
    }

    const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div style={{ marginTop: 20 }}>
            <div className="ui embed">
                <iframe
                    src={videoSource}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.snippet.title}
                ></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetails;
