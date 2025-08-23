import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/use_state"}>Use State</Link>
        <Link to={"/form-handel"}>Form</Link>
        <Link to={"/use-effect"}>useEffect</Link>
        <Link to={"/store"}>Store</Link>
        <Link to={"/use-callback"}>Use CallBack</Link>
        <Link to={"/use-memo"}>Use memo</Link>
    </div>
  )
}

export default Header
