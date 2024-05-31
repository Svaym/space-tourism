import NavLinks from "../NavLinks/NavLinks"
import logo from '../../../assets/shared/logo.svg'
import close from '../../../assets/shared/icon-close.svg'
import hamburger from '../../../assets/shared/icon-hamburger.svg'
import { useState } from "react"


export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false)
  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }
  return (
    <div className="hidden sm:flex sm:items-center sm:justify-between sm:py-5">
      <div>
        <img src={logo} alt="logo" />
      </div>
      {menuOpen && <NavLinks closeMenu={toggleMenu} />}
      <button onClick={toggleMenu}>
        {menuOpen ? <img src={close} alt="close" style={{ width: '25px' }} /> : <img src={hamburger} alt="hamburger" style={{ width: '25px' }} />}
      </button>
    </div>
  )
}
