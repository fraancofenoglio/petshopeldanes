import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import "./NavMobile.css"


const NavMobile = ({setOpen, open}) => {

  return (
    <>
    <nav className="nav-mobile">
        <div className='logo-container-mobile' onClick={() => window.location.href = "/"}>
        <img src={logo} alt="logo" />
        </div>

        <button className="boton-menu" onClick={(e)=> {
            setOpen(!open)
            document.body.style.overflowY = "hidden"
            }} >
            <img src={menu} alt="menu" />
        </button>

    </nav>
    </>
  )
}

export default NavMobile
