import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'
// import MenuCard from '../components/MenuCard'
// import Menu from '../pages/Menu'
import Chef from '../pages/Chef/Chef'
import Blog from '../pages/Blog/Blog'
import Menu from '../pages/Menu'


const Wrapper = () => {
  return (
    <>
    <Navbar/>

{/* <Menu/> */}
{/* <Chef/> */}
{/* <Blog/> */}
    <Outlet/>
    
    <Footer/>
    </>
  )
}

export default Wrapper