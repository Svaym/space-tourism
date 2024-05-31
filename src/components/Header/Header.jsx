import Menu from "./Menu/Menu"
import MobileMenu from "./MobileMenu/MobileMenu"

export default function Header() {
  return (
    <header>
      <div className="container">
        <Menu />
        <MobileMenu />
      </div>
    </header>
  )
}
