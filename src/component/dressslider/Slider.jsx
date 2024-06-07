import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../imges/slider1.jpg'
import slider2 from '../../imges/slider2.jpg'
import slider3 from '../../imges/slider3.jpg'
import slider4 from '../../imges/slider4.jpg'
import slider5 from '../../imges/slider5.jpg'
import slider6 from '../../imges/slider6.jpg'
import slider7 from '../../imges/slider7.jpg'
function Sliderr() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
    return <>
       <div className="width-slider" style={{width: '90%', margin: 'auto'}} >
       
        <Slider {...settings}>
          <div className=" p-1">
            <img className="w-100 " src={slider1} alt="" />
          </div>
          <div className="p-1">
           <img className="w-100 " src={slider2} alt="" />
          </div>
          <div className="p-1">
          <img className="w-100 " src={slider3} alt="" />
          
          </div>
          <div className="p-1">
          <img className="w-100 " src={slider4} alt="" />
          </div>
          <div className="p-1">
          <img className="w-100 " src={slider5} alt="" />
          </div>
          <div className="p-1">
          <img className="w-100 " src={slider6} alt="" />
          </div>
          <div className="p-1">
          <img className="w-100 " src={slider7} alt="" />
          </div>
        </Slider>
        <div>
  <img className='w-100 mb-5 mt-2' src={require('../../imges/bg.jpg')} alt="" />
</div>
      </div>
    
    </>;
}

export default Sliderr;