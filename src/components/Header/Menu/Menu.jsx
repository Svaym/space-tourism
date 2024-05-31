import logo from '../../../assets/shared/logo.svg'
import NavLinks from '../NavLinks/NavLinks'


export default function Menu() {
  return (
    <div className="flex items-center justify-between py-5 sm:hidden">
      <img src={logo} alt="logo" />
      <NavLinks />
    </div>
  )
}
