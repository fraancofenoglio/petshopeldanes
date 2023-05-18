import eldanes3 from "../../assets/eldanes3.jpg";
import "./nosotros.css";

const NosotrosPrincipal = () => {
  return (
    <section className='nosotros-container'>
        <h2 className='nosotros-titulo'>Sobre Nosotros</h2>
        <div className='nosotros-container-img'>
            <img src={eldanes3} alt="local forrajeria el danes" />
        </div>
        <div className="nosotros-presentacion">
            <h2>SOBRE NOSOTROS</h2>
            <p>Nuestras soluciones integrales para Petshops y Veterinarias le permiten a TU comercio contar con un amplio stock y variedad de productos de calidad, con entrega inmediata, atención personalizada, más la posibilidad de contar con lanzamientos exclusivos de productos novedosos, packaging exclusivo y de alto valor percibido por sus clientes.</p>
        </div>
    </section>
  )
}

export default NosotrosPrincipal