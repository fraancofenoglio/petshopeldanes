import eldanes2 from "../../assets/eldanes2.jpg"
import "./nosotros.css";


const NosotrosEvento1 = () => {
  return (
    <div className='nosotros-container'>
        <h2 className='nosotros-titulo'>Eventos</h2>
        <div className="nosotros-container-img">
            <img src={eldanes2} alt="" />
        </div>
        <div className="nosotros-presentacion-2">
            <h2>SOBRE NOSOTROS</h2>
            <p>Nuestras soluciones integrales para Petshops y Veterinarias le permiten a TU comercio contar con un amplio stock y variedad de productos de calidad, con entrega inmediata, atención personalizada, más la posibilidad de contar con lanzamientos exclusivos de productos novedosos, packaging exclusivo y de alto valor percibido por sus clientes.</p>
        </div>

    </div>
  )
}

export default NosotrosEvento1