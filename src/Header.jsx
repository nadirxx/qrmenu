import React from 'react'
import { Link } from 'react-router-dom'
import logo from './IMG/logoMENU.jpg'
function Header() {
  return (
    <div className='Header_1'>

      <div className='logo_1'>
        <img className='logo_2' src={logo} alt="" />
      </div>
           <Link  className='link' to={"/"}>Home</Link>
        <Link  className='link'  to={"/Salads"}>Salads</Link>
        <Link  className='link'  to={"/MainCourses"}>Main Courses</Link>
        <Link  className='link'  to={"/Drinks"}>Drinks</Link>
         <Link  className='link'  to={"/Desert"}>Desert</Link>
         
    </div>
  )
}

export default Header