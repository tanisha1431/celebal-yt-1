import React from 'react';
import { BsSearch } from "react-icons/bs";
import './NavbarComp.css';

const NavbarComp = () => {
  return (
   <>
   <nav className='border border-dark navbar'>
      
      <img src="https://pngimg.com/uploads/youtube/youtube_PNG102349.png" className='nav_logo'/>
      <form>
        <input type="text" placeholder='Search'></input>
        
        <button type="submit">
        <BsSearch size={22}/>
        </button>
        
      </form>
    </nav>
   </>
  )
}

export default NavbarComp