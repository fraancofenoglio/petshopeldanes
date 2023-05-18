import {Routes, Route} from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Nosotros from '../pages/Nosotros';
import Contacto from '../pages/Contacto';
import Productos from '../pages/Productos';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/nosotros' element={<Nosotros/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
        <Route path='/productos' element={<Productos/>}></Route>


        <Route path='*' element={<h2>Hola</h2>}></Route>

    </Routes>

  )
}

export default MainRoutes