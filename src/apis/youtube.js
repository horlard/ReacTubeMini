import axios from 'axios';

const KEY = 'AIzaSyDxAQOi4WEqFwXy5aW61rapg7p6eE622ic';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }

})