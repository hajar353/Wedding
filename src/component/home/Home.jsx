
import toast from 'react-hot-toast';
import video from '../../imges/video.mp4'
import Sliderr from '../dressslider/Slider';
function Home() {
    return <>
<section className="mt-5 pt-3">
<video autoPlay loop muted style={{paddingTop:'50px',marginTop:'40px'}}>
      <source src={video}  type="video/mp4"/>
     </video>
</section>

<div className="d-flex mt-4">
<hr className="w-50 me-1" />
<div className="rotate1"></div> 
<hr className="w-50 mx-1" />
</div>
<section className='content p-5 text-center w-75 m-auto'>
<h1 className='mb-2' style={{ color: "#695c5c"}}>Love Brought You Here. Us Too.</h1>
<p style={{ color: "#695c5c", fontFamily: "Inter Light",fontSize: "1.2rem",lineHeight: "2rem"}}>Nothing matters 
more to us than connection. Allure Bridals strives to provide everyone — 
    from the engaged to members of the wedding party — gorgeous wedding wear for every look and budget. 
    We have something for everyone: iconic Mikado ballgowns, luxurious velvet tuxedos,
     sleek minimalist crepe and whispers of chiffon. 
    Designed from the heart, to make your wedding utterly unforgettable.</p>
</section>
<div className="d-flex mb-4">
<hr className="w-50 me-1" />
<div className="rotate1"></div> 
<hr className="w-50 mx-1" />
</div>
  
<Sliderr />
<div className="d-flex mb-4">
<hr className="w-50 me-1" />
<div className="rotate1"></div> 
<hr className="w-50 mx-1" />
</div>

<div className="text-center mt-5">
<h2 className='mb-2 h1' style={{ color: "#695c5c"}}>Upcoming Designer Events</h2>
</div>

<section style={{backgroundColor: '#F9F6F5', overflow: 'hidden',marginTop:'30px',marginBottom: '30px'}}>

    <div className="container  mb-5 mt-5">
        <div className="row gy-5">
            <div className="col-md-4">
                <article className='bg-white p-3 border'>
                <p className='fw-bold' style={{color:'#AC634D'}}>Dec 14, 2023 - Dec 23, 2024</p>
                        <p>PREVIEW EVENT</p>
                        <h4 style={{color:'#AC634D'}}>Wedding-Collections 2024</h4>
                        
                        <div className="d-flex mb-4">
                        <hr className="w-50 me-1" />
                        <div className="rotate1"></div> 
                        <hr className="w-50 mx-1" />
                        </div>   
     <figure>
      <img className='w-100 vh-50 rounded-2' src={require('../../imges/s1.jpg')} alt="braid" />
         </figure>
   <h4 className='fw-bold' style={{color:'#AC634D'}}>Collections</h4>
 <p className='font-weight-light'>dresses</p>
       <div className='order-div'>
   <button onClick={()=>toast.success("The Dress Was Ordered successfully",{position:'top-right',duration:2000})}
    className='w-100 order-btn fw-bold'>Order Now</button>
         </div>
          <div className='see-div'>
         <button className='w-100 see-btn fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal">See Dress</button>
                        </div>
                </article>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Dreeses</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <figure>
     <img className='w-100 vh-50 rounded-2' src={require('../../imges/s1.jpg')} alt="braid" />
     </figure>
      </div>
      <div className="modal-footer">
        <button type="button" className="see-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>
            </div>
            <div className="col-md-4">
                <article className='bg-white p-3 border'>
                <p className='fw-bold' style={{color:'#AC634D'}}>Dec 14, 2023 - Dec 23, 2024</p>
                        <p>PREVIEW EVENT</p>
                        <h4 style={{color:'#AC634D'}}>Wedding-Collections 2024</h4>
                        
                        <div className="d-flex mb-4">
                        <hr className="w-50 me-1" />
                        <div className="rotate1"></div> 
                        <hr className="w-50 mx-1" />
                        </div>   
                        <figure>
                            <img className='w-100 vh-50 rounded-2' src={require('../../imges/s2.jpg')} alt="braid" />
                        </figure>
                        <h4 className='fw-bold' style={{color:'#AC634D'}}>Collections</h4>
                        <p className='font-weight-light'>dresses</p>
                        <div className='order-div'>
                            <button  onClick={()=>toast.success("The Dress Was Ordered successfully",{position:'top-right',duration:2000})} className='w-100 fw-bold order-btn'>Order Now</button>
                        </div>
                        <div className='see-div'>
                            <button className='w-100 fw-bold see-btn' data-bs-toggle="modal" data-bs-target="#exampleModal2">See Dress</button>
                        </div>
                </article>
<div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Dreeses</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <figure>
     <img className='w-100 vh-50 rounded-2' src={require('../../imges/s2.jpg')} alt="braid" />
     </figure>
      </div>
      <div className="modal-footer">
        <button type="button" className="see-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>
            </div>
            <div className="col-md-4">
                <article className='bg-white p-3 border'>
                <p className='fw-bold' style={{color:'#AC634D'}}>Dec 14, 2023 - jan 28, 2024</p>
                        <p>PREVIEW EVENT</p>
                        <h4 style={{color:'#AC634D'}}>Wedding-Collections 2024</h4>
                        
                        <div className="d-flex mb-4">
                        <hr className="w-50 me-1" />
                        <div className="rotate1"></div> 
                        <hr className="w-50 mx-1" />
                        </div>   
                        <figure>
                            <img className='w-100 vh-50 rounded-2' src={require('../../imges/s3.jpg')} alt="braid" />
                        </figure>
                        <h4 className='fw-bold' style={{color:'#AC634D'}}>Collections</h4>
                        <p>dresses</p>
                        <div className='order-div'>
                            <button  onClick={()=>toast.success("The Dress Was Ordered successfully",{position:'top-right',duration:2000})} className='w-100 fw-bold order-btn'>Order Now</button>
                        </div>
                        <div className='see-div'>
                            <button className='w-100 fw-bold see-btn' data-bs-toggle="modal" data-bs-target="#exampleModal3">See Dress</button>
                        </div>
                </article>
 <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Dreeses</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <figure>
     <img className='w-100 vh-50 rounded-2' src={require('../../imges/s3.jpg')} alt="braid" />
     </figure>
      </div>
      <div className="modal-footer">
        <button type="button" className="see-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    </div>


</section>

<div className="d-flex mb-5">
<hr className="w-50 me-1" />
<div className="rotate1"></div> 
<hr className="w-50 mx-1" />
</div>

<section className=' mt-3 mb-5 p-4'>
<div className="container-fluid">
<div className="row gy-5">
    <div className="col-lg-8">
        <div className="text mt-5">
            <h2>Be Distinguished</h2>
            <p style={{ color: "#695c5c",lineHeight:'2'}}>In our website, there's nothing better
             than seeing happy brides wear our gowns.
                 Feel free to submit your photos for a chance to be featured on our socials & blogs.
                 Congrats on your special day!</p>
                
                 <div className='w-50 w-media'>
                 <div className="order-div">
                 <button className='fw-bold design-btn w-100'>Design your wedding</button>
                 </div>
                 </div>
                    

        </div>
    </div>
    <div className="col-lg-4">
         <div className="text-end position-relative">
      
        <img className='w-75 '  src={require('../../imges/position-relative.webp')} alt="" />
            <img className='w-50 position-absolute top-50 translate-middle-y  end-90  '
             src={require('../../imges/position-absluote.webp')} alt="" /> 
       
        </div>
    
      
    </div>
</div>

</div>



</section>

<div className="d-flex mb-5">
<hr className="w-50 me-1" />
<div className="rotate1"></div> 
<hr className="w-50 mx-1" />
</div>

<section className='mt-3 mb-4'>

<div className='text-center w-75 m-auto'>
<h3 className='h1' style={{ color: "#695c5c"}}>Inspiration</h3>
<p style={{ color: "#695c5c",marginBottom: '30px',marginTop: '30px'}}> Your wedding inspiration starts here! 
Browse our library of beautiful real brides, 
    as well as other useful articles as you begin your wedding planning journey.</p>
</div>
<div className="container-fluid">
    <div className="row gy-3">
        <div className="col-md-6">
            <div>
                <img className='w-100' src={require('../../imges/PS2.webp')} alt="" />
            </div>
        </div>
        <div className="col-md-6 p-4">
 <div className='p-2'>
    <h3 style={{ lineHeight:'2'}}>
    All the new designs are on our website, be distinguished and make your own design 
    </h3>
    <div className="d-flex mb-3">
<hr className="w-50 me-1" />
<div className="rotate1"></div> 
<hr className="w-50 mx-1" />
</div>
<div className='w-100 w-media'>
                 <div className="order-div">
                 <button  className='fw-bold design-btn w-100'>Book Now</button>
                 </div>
                 </div>

 </div>
        </div>
    </div>
</div>

</section>

<div className="d-flex mb-5">
<hr className="w-50 me-1" />
<div className="rotate1"></div> 
<hr className="w-50 mx-1" />
</div>


<section className='mt-3 mb-4'>


<div className="container-fluid">
<h4 className='ms-2' style={{ color: '#AC634D',marginBottom: '40px'}}>join us__ for your chance to be featured on our site__</h4>
    <div className="row gy-4">
        <div className="col-sm-3">
        <div className="item position-relative overflow-hidden rounded">
          <img src={require('../../imges/download.jpg')} className="w-100" alt=""/>
        <div className="overlay position-absolute d-flex  justify-content-center align-items-center">
          <p className="fs-6 text-white">Design Your Wedding now</p>
       </div>
        </div>
    </div>
    <div className="col-sm-3">
        <div className="item position-relative overflow-hidden rounded">
          <img src={require('../../imges/download (1).jpg')} className="w-100" alt=""/>
        <div className="overlay position-absolute d-flex  justify-content-center align-items-center">
          <p className="fs-6 text-white">Design Your Wedding now</p>
       </div>
        </div>
    </div>
    <div className="col-sm-3">
        <div className="item position-relative overflow-hidden rounded">
          <img src={require('../../imges/download (2).jpg')} className="w-100" alt=""/>
        <div className="overlay position-absolute d-flex  justify-content-center align-items-center">
          <p className="fs-6 text-white">Design Your Wedding now</p>
       </div>
        </div>
    </div>
    <div className="col-sm-3">
        <div className="item position-relative overflow-hidden rounded">
          <img src={require('../../imges/download (3).jpg')} className="w-100" alt=""/>
        <div className="overlay position-absolute d-flex  justify-content-center align-items-center">
          <p className="fs-6 text-white">Design Your Wedding now</p>
       </div>
        </div>
    </div>
</div>

</div>

</section>
    </>;
}

export default Home;