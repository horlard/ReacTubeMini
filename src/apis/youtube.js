import axios from 'axios';

const KEY = 'AIzaSyAe11v8SyxFSgVmgQZMSQoXx6J_aUM_ST0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }

})