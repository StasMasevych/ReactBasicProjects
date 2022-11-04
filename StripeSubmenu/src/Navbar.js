import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {openSubmenu, openSidebar, closeSubmenu} = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    console.log(page)
    const tempBtn = e.target.getBoundingClientRect();
    const center  = (tempBtn.left + tempBtn.right)/2;
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, {center,bottom})

  }

  const submenuCloseHandler = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }
  return (
    <nav onMouseOver={submenuCloseHandler} className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="logo"/>
          <button onClick={openSidebar} className="btn toggle-btn">
            <FaBars/>
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">products</button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">developers</button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">company</button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
