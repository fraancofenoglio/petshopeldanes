// import eldanes1 from "../assets/eldanes1.jpg"
import "./productos.css"
const Productos = () => {
  return (
    <>
        <div className='aviso-productos-container'>
            <div className="aviso-productos-imagen">
                {/* <img src={eldanes1} alt="" /> */}
            </div>

            <div className="aviso-container">
                <h2>¡AVISO IMPORTANTE!</h2>

                <p>
                    ¡ Proximamente llega la tienda de PetShop El Danes ! Vas a poder armar tu carrito de compras y mandarnos tu pedido directo desde la web.
                </p>
            </div>
        </div>
    </>
  )
}

export default Productos