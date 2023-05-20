import logo from "../../assets/logo.png";
import whatsapp from "../../assets/whatsapp.png"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import mail from "../../assets/mail.png"
import "./footer.css"

const Footer = () => {
  return (
    <footer>
    <div className="footer-productos">
      <h3>Productos</h3>
      <ul>
        <li><a href="/">Perros</a></li>
        <li><a href="/">Gatos</a></li>
        <li><a href="/">Aves</a></li>
        <li><a href="/">Otras Mascotas</a></li>
      </ul>
    </div>

    <div className='logo-container'>
      <img src={logo} alt="logo" />
    </div>

    <div className="footer-contacto">
      <h3>Contacto</h3>
      <ul>
        <li>
          <img className="icono-redes" src={whatsapp} alt="whatsapp el danes bragado" />
          <a href="https://wa.me/5492342450142/?text=Hola,%20me%20gustaría%20consultarte%20sobre" target="_blank" rel="noreferrer">+5492342450142</a>
        </li>
        <li>
          <img className="icono-redes" src={facebook} alt="facebook el danes bragado" />
          <a href="https://www.facebook.com/forrajeria.eldanes" target="_blank" rel="noreferrer">Forrajeria PetShop ElDanes</a>
        </li>
        <li>
          <img className="icono-redes" src={instagram} alt="instagram el danes bragado" />
          <a href="https://www.instagram.com/forrajeriaypetshopeldanes" target="_blank" rel="noreferrer">forrajeriaypetshopeldanes</a>
        </li>
        <li>
          <img className="icono-redes" src={mail} alt="email mail el danes bragado" />
          <a href="mailto:contacto@petshopeldanes.com">contacto@petshopeldanes.com</a>
        </li>
      </ul>

    </div>

  </footer>
  )
}

export default Footer