import React from 'react'
import '../style/global.css'
import Footer from './Footer'
import Header from './Header'

export default function Layout({children}) {
  return (
    <div className='container'>
       <Header/>
        <div className='content'>{children}</div>
        <div className='footer'><Footer/></div>
    </div>
  )
}
