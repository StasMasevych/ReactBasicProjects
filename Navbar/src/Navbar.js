import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './Logo@4x.png';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  console.log(linksContainerRef)

  //every time when showLinks value change I want to run useRef callback functon
  //if .show-link class, we see items, or if default height will be not 0 but height of our ul list, we will see the items. So, we modify CSS to show. 
  //click => setShowLinks change showLinks to true => change CSS height => show on the screen
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  },[showLinks])

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button onClick={() => setShowLinks(!showLinks)} className='nav-toggle' >
            <FaBars/>
          </button>
        </div>
          <div className="links-container" ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const {id, url, text} = link;
              return (
                <li key={id}>
                 <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const {id, url, icon} = socialIcon;
            return (
                <li key={id}>
                 <a href={url}>{icon}</a>
                </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
