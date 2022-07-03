import axios from 'axios';

const YT_KEY='AIzaSyDJKt46hjXM451wM5tMTwmsCtwhmxQgnPk';

const request= axios.create ({
    baseURL: 'https://googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResults:40,
        key:YT_KEY
    }
    }
)

export default request