import React, { useEffect, useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { useHistory } from 'react-router-dom';
import './NavbarComp.css';

const NavbarComp = () => {
  const [search,setSearch]=useState(" ")

  const history=useHistory();

  function searchfunc() {
    history.push({
      pathname: '/search',
      search: search
    });
  }
  
  

  return (
   <>
   <nav className='border border-dark navbar'>
      
      <img src="https://pngimg.com/uploads/youtube/youtube_PNG102349.png" className='nav_logo'/>
      <form>
        <input type="text" placeholder='Search' onChange={(event) =>{setSearch(event.target.value)}}></input>
        
        <button type="submit" onClick={searchfunc}>
        <BsSearch size={22}/>
        </button>
        
      </form>
    </nav>
   </>
  )
}

export default NavbarComp