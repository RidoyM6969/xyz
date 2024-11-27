import React from 'react'
import Menu from '../pages/home/Menu'
import SmallMenu from '../pages/home/SmallMenu'
import Footer from '../pages/home/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Menu />
      <SmallMenu />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
