import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainRoutes from './routes/MainRoutes';
import { useState } from 'react';
import NavMobile from './components/NavMobile/NavMobile';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';

function App() {

  const [mobile, setMobile] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);


  window.addEventListener("resize", ()=> {
    setMobile(window.innerWidth)
  })



  return (

    <>
      <BrowserRouter>

      {open ? <Menu open={open} setOpen={setOpen}></Menu> : <></>}

      {mobile > 900 ? <Navbar/> : <NavMobile open={open} setOpen={setOpen}/>}

        <MainRoutes/>
        <Footer/>

      </BrowserRouter>
    </>

  );
}

export default App;
