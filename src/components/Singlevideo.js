import React from 'react'
import { Row,Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Singlevideo = ({ videoDetail }) => {

    console.log(videoDetail)

    const videoid=videoDetail.id.videoId

    const { title, channelTitle } = videoDetail.snippet

    
    const imgURL = `https://www.youtube.com/embed/${videoid}`
    const history = useHistory();
    const watchVideo = () => {
        history.push({
            pathname: `/${videoDetail.id.videoId}`,
            state: videoDetail
     })
 }

  return (
    <Row onClick={watchVideo}>
          <Col>
          <iframe width="560" height="315" src={imgURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Col>
          <Col>
              <h6>{title}</h6>
              <p style={{display:'inline'}}><i>{channelTitle} </i></p>
          </Col>
    </Row>
  )
}

export default Singlevideo