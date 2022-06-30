import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarComp from '../NavbarComp';
import Video from '../Video';
import './Homescreen.css'

const Homescreen = () => {
  return (<>
  
  <NavbarComp/>
  <Container>
    <Row>
        {[...new Array(40)].map(() => (
            <Col lg={3} md={4}> <Video/></Col>
        ))}
    </Row>
  </Container>
  
  </>
    
  )
}

export default Homescreen