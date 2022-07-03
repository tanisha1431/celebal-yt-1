import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarComp from '../NavbarComp';
import Video from '../Video';
import './Homescreen.css'
import axios from 'axios';


const Homescreen = () => {

  const [video,setVideo]=useState([])
  const [loading,setLoading]=useState(false)

const key='AIzaSyDJKt46hjXM451wM5tMTwmsCtwhmxQgnPk';
const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=60&key=${key}`

useEffect(() => {
  axios.get(url).then(res => {
    setVideo(res.data.items)
  
    console.log(res.data.items)
    setLoading(true)
  }).catch(err => {
    console.log(err)
  })
}, [])
  return (<>
  
  <NavbarComp/>
  <Container>
    <Row>
        {video.map((v) => (
            <Col lg={3} md={4}> <Video v={v}/></Col>
        ))}
    </Row>
  </Container>
  
  </>
    
  )
}

export default Homescreen