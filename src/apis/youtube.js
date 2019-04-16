import axios from 'axios';

const KEY = 'AIzaSyDwId6saFdVH0DOL5WtydUJ4Nzob4ozsfM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }

})