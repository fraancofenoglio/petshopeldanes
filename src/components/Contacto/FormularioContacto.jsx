import { useState } from "react";
import "./contacto.css";

const FormularioContacto = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [asunto, setAsunto] = useState();
    const [mensaje, setMensaje] = useState("");

    const handleSubmit =  (e) => {
        e.preventDefault();

        //email.js

    }

  return (
    <div className="formulario-container">

          <form className="formulario" onSubmit={handleSubmit}>

              <label htmlFor="Nombre">Nombre</label>
              <input type="text" name="Nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} minLength={1} maxLength={20} required/>

              <label htmlFor="email">Email</label>
              <input type="email" name="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} minLength={2} required/>

              <label htmlFor="Asunto">Asunto</label>
              <input type="text" inputMode="numeric" name="Asunto" id="asunto" value={asunto} onChange={(e) => setAsunto(e.target.value)} required min={3} maxLength={5}/>

              <label htmlFor="Mensaje">Mensaje</label>
              <textarea name="Mensaje" id="mensaje" cols="30" rows="7" value={mensaje} onChange={(e) => setMensaje(e.target.value)} minLength={1} required placeholder="Hola.."></textarea>

              <input className="boton-enviar" type="submit" value="Enviar"/>
          </form>
    </div>
  )
}

export default FormularioContacto