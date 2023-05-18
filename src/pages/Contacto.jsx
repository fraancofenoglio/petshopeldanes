import FormularioContacto from "../components/Contacto/FormularioContacto"
import RedesContacto from "../components/Contacto/RedesContacto"

const Contacto = () => {
  return (
    <>
      <h2 className="contacto-titulo">Contacto</h2>

      <section className="contacto-container">
        <FormularioContacto/>
        <RedesContacto/>

      </section>
    </>
  )
}

export default Contacto