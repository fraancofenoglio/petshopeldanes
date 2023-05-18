import logo from "../../assets/logo.png";
import "./navbar.css"

const Navbar = () => {
  return (
    <nav>
    <div className='logo-container' onClick={() => window.location.href = "/"}>
      <img src={logo} alt="logo" />
    </div>
    <div className='navegador-container'>
      <h4><a href="/nosotros">Nosotros</a></h4>
      <h4><a href="/productos">Productos</a></h4>
      <h4><a href="/contacto">Contacto</a></h4>
    </div>
  </nav>
  )
}

export default Navbar