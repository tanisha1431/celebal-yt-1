import axios from 'axios';

const YT_KEY='AIzaSyDJKt46hjXM451wM5tMTwmsCtwhmxQgnPk';

export default axios.create({
    baseURL: 'https://googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResults:5,
        key:YT_KEY
    }
    }
)