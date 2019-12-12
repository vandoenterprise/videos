import axios from 'axios';

const KEY = 'AIzaSyBtvj0OHNZLIfEk9e5I4oJelIwrJR1FWfg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
