import React,{useState,useEffect} from 'react'
import NavbarComp from '../NavbarComp';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Video from '../Video';
import './Searchscreen.css';
import { useLocation} from 'react-router-dom';
import Searchscreenvideo from '../Searchsceenvideo';
import NavbarSearch from '../NavbarSearch';
import Videodetails from '../Videodetails';
import axios from 'axios';
import Singlevideo from '../Singlevideo';

const Searchscreen = () => {

    const location = useLocation() 
    console.log(location)

    const keyword=location.search
    console.log(keyword)


    const [res,setRes]=useState()

    const key='AIzaSyDJKt46hjXM451wM5tMTwmsCtwhmxQgnPk';

    const URL=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${key}`
    
    useEffect( ()=>{
        axios.get(URL).then((resp)=>{
            console.log(resp.data.items)
            setRes(resp.data.items)
        }).catch((err)=>{
            console.error(err)
        })
    },[])
    
  

  return (
   <>
   <NavbarSearch/>
   <Container>
    <Row>
    {res?(res.map((video) => (
            <div class="searchvideo" key={video.id}>
                  <Singlevideo videoDetail={video} />
            </div>
        ))
        ) : (
            <h5>Videos Loading...</h5>
        )
        }
    </Row>
   </Container>

   </>
  )
}

export default Searchscreen



