import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import slider4 from "../../assets/slider4.jpg";
import './slider.css'

const Slider = () => {
  return (
    <>
        <section className="intro">

        <div className="slider">
            <ul>
                <li>
                    <img src={slider1} alt="slider1"/>
                </li>
                <li>
                    <img src={slider2} alt="slider2"/>
                </li>
                <li>
                    <img src={slider3} alt="slider3"/>
                </li>
                <li>
                    <img src={slider4} alt="slider4"/>
                </li>
            </ul>
        </div>

        </section>
    
    </>
  )
}

export default Slider