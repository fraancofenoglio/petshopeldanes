import { useState } from "react"
import "./menu.css"

const Menu = ({open, setOpen}) => {

    const [animacion, setAnimacion] = useState("slide-in-left 0.3s linear both");

    const [animacionBackground, setAnimacionBackground] = useState("animation: fade 0.3s ease-in-out forwards");

    const handleAnimacionMenu = () => {
        document.body.style.overflowY = "visible"
        if (open !== true) {
            setAnimacion("slide-in-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both") 
            setAnimacionBackground(" fade 0.5s ease-in-out forwards")
        } else {
            setAnimacion("slide-out-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both")
            setAnimacionBackground("fade-out 0.5s ease-in-out forwards")
        }
        setTimeout(() => {
            
            setOpen(!open)
        }, 510);
    }

  return (
    <div className='menu-background' style={{animation: animacionBackground}} onClick={()=>handleAnimacionMenu()}>

        <div className='menu-container' style={{animation: animacion}} onClick={(e)=> e.stopPropagation()}>

            <button onClick={()=> handleAnimacionMenu()}>
            <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 96 960 960" width="60"><path d="m248.13 866.087-57.782-58.217L422.217 576 190.348 344.261l57.782-58.783 232.305 231.739L711.87 285.478l57.782 58.783L538.783 576l230.869 231.87-57.782 58.217-231.435-231.739L248.13 866.087Z"/></svg>
            </button>

            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/nosotros">Nosotros</a></li>
                <li><a href="/productos">Productos</a></li>
                <li><a href="/contacto">Contacto</a></li>
            </ul>
        </div>

    </div>
  )
}

export default Menu