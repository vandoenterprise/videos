import React, { Component } from 'react';
import youtube from '../../api/youtube';
import SearchBar from '../SearchBar';
import VideoList from '../VideoList';
import VideoDetails from '../VideoDetails';

export default class index extends Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.onSearchSubmit('Family Guy');
    }

    onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={(term) => this.onSearchSubmit(term)} />

                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onVideoSelect={(video) => this.onVideoSelect(video)}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
