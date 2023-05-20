import "./contacto.css"

const RedesContacto = () => {
  return (
    <div className="redes-container">
        <h3>Nos encontramos en Rivadavia 840, o contactanos a través de:</h3>

        <ul className="lista-redes">
        <li>
            <p>WhatsApp:</p>
            <a href="https://wa.me/5492342450142/?text=Hola,%20me%20gustaría%20consultarte%20sobre" target="_blank" rel="noreferrer">2342-450142</a>
        </li>
        <li>
            <p>Facebook:</p>
            <a href="https://www.facebook.com/forrajeria.eldanes" target="_blank" rel="noreferrer">Forrajeria PetShop ElDanes</a>
        </li>
        <li>
            <p>Instagram:</p>
            <a href="https://www.instagram.com/forrajeriaypetshopeldanes" target="_blank" rel="noreferrer">forrajeriaypetshopeldanes</a>
        </li>
        <li>
            <p>Por email a:</p>
            <a href="mailto:contacto@petshopeldanes.com">contacto@petshopeldanes.com</a>
        </li>
        </ul>
    </div>
  )
}

export default RedesContacto