import React from 'react'
import NavbarComp from '../NavbarComp';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Video from '../Video';
import './Searchscreen.css';
const Searchscreen = () => {
  return (
   <>
   <NavbarComp/>
   <Container>
    <Row>
        <Col><Video/></Col>
        <Col> 
        {[...new Array(5)].map(() => (
            <Row className='please'><div className="searchvideo"><Video/></div> </Row>
        ))}
    
        </Col>
    </Row>
   </Container>

   </>
  )
}

export default Searchscreen
