import React from 'react';
import {useHistory} from 'react-router-dom';
import './video.css';


const Video = ({v}) => {
  

  const imgURL = v.snippet.thumbnails.medium.url
const { title, channelTitle } = v.snippet
const history=useHistory()
const searchscreen= ()=>{
history.push('/search')
}

  return (
    <div className='videod' onClick={searchscreen}>
<div className='img'>
<img  src={imgURL}  ></img>
</div>
<div className='video_title'> {title}</div>
    </div>
  )
}

export default Video