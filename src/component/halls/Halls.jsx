import toast from 'react-hot-toast';
function Halls() {
    return <>
    <section className='mt-5 pt-5 mb-5'>
<div className="container-fluid mt-5 pt-5">
    <div className="row gy-3">
        <div className="col-md-8">
       <article className='p-3'>
       <p style={{ color: "#695c5c", lineHeight: '2'}}>Our website strives for excellence in design and 
       impeccable craftsmanship to create a hall worthy of the bride's most precious moments.
        We believe that brides should feel less than wonderful on their wedding day. </p>
       </article>
        </div>
        <div className="col-md-4">
          <figure className='text-center'>
            <img className='w-75 rounded-2' src={require('../../imges/imgHalls/imgStatic.jpg')} alt="" />
          </figure>
        </div>
    </div>
</div>

</section>

<div className="d-flex mb-5">
<hr className="w-50 me-1" />
<div className="rotate1"></div> 
<hr className="w-50 mx-1" />
</div>

<section className='mt-5 mb-5'>
<div className="container">
    <div className="row g-3">
        <div className="col-lg-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgHalls/1.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>hotel</h3>
                 <p style={{ color: "#695c5c"}}>"Our website strives for excellence in design and impeccable"</p>
            </article>
            <div className="order-div">
           <button className='order-btn w-100 fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal">See Details</button>
           </div>
        </div>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Halls</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgHalls/1.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Halls</h3>
                <p className='mb-4'>Hall Name : <span style={{color:'#AC634D'}}>hotel</span></p>
                <p className=' mb-4'>Price : <span style={{color:'#AC634D'}}>500$</span></p>
                <p className='mb-4'>Number of persons: <span style={{color:'#AC634D'}}>300 </span></p>
            </article>
            <h5 style={{color:'#AC634D'}}>Hotel Reviews</h5>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-secondary"></i>

            <div className="w-100 mt-5">
                <p>Location Hotel:</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12096.
                978380974477!2d-73.99116595541987!3d40.712631699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                1!3m3!1m2!1s0x89c25a18e3553f8b%3A0x1337dae5edaabaa2!2z2YHZhtiv2YIg2YHZiNixINiz2YrYstmI2YbYs
                iDZhtmK2YjZitmI2LHZgyDYr9in2YjZhiDYqtin2YjZhg!5e0!3m2!1sar!2seg!4v1710788141920!5m2!1sar!2seg"
                 className='w-100' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The hall Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>

        <div className="col-lg-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgHalls/2.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>Seafront Hotel</h3>
                 <p style={{ color: "#695c5c"}}>"Our website strives for excellence in design and impeccable"</p>
            </article>
               <div className="order-div">
           <button className='order-btn w-100 fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal2">See Details</button>
           </div>
        </div>

<div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Halls</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgHalls/2.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Halls</h3>
                <p className='mb-4'>Hall Name : <span style={{color:'#AC634D'}}>Seafront Hotel</span></p>
                <p className=' mb-4'>Price : <span style={{color:'#AC634D'}}>320$</span></p>
                <p className='mb-4'>Number of persons: <span style={{color:'#AC634D'}}>400 </span></p>
            </article>
            <h5 style={{color:'#AC634D'}}>Seafront Hotel Reviews</h5>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
           

            <div className="w-100 mt-5">
                <p>Location Seafront:</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.
                221445975515!2d39.12035051114501!3d21.5772775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                1!3m3!1m2!1s0x15c3dadfcda2f175%3A0x23f2dd196984e64f!2zQmVhY2ggVGltZSBWaWxsYXMgSG90ZWwg2YHZhNmEI
                NmI2YLYqiDYp9mE2LTYp9i32KY!5e0!3m2!1sar!2seg!4v1710788888461!5m2!1sar!2seg"
                 className='w-100 border-0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The hall Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>

        <div className="col-lg-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgHalls/3.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>Vila</h3>
                 <p style={{ color: "#695c5c"}}>"Our website strives for excellence in design and impeccable"</p>
            </article> 
            <div className="order-div">
           <button className='order-btn w-100 fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal3">See Details</button>
           </div>
        </div>

<div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Halls</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgHalls/3.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Halls</h3>
                <p className='mb-4'>Hall Name : <span style={{color:'#AC634D'}}>Vila</span></p>
                <p className=' mb-4'>Price : <span style={{color:'#AC634D'}}>440$</span></p>
                <p className='mb-4'>Number of persons: <span style={{color:'#AC634D'}}>450</span></p>
            </article>
            <h5 style={{color:'#AC634D'}}>vila Reviews</h5>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-secondary"></i>
            <i className="fa-solid fa-star fa-lg text-secondary"></i>

            <div className="w-100 mt-5">
                <p>Location Vila:</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59354.
                206131345!2d39.35409317832031!3d21.600053599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i
                768!4f13.1!3m3!1m2!1s0x15c3d5fbc3e2286d%3A0x789578fc045b119e!2z2YXZhtiq2KzYuSDZgdm
                K2YTYpyDZhNin2YPYrNix2Yo!5e0!3m2!1sar!2seg!4v1710789341243!5m2!1sar!2seg"
                 className='w-100 border-0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The hall Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>

        <div className="col-lg-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgHalls/4.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>Vila in The Forest</h3>
                 <p style={{ color: "#695c5c"}}>"Our website strives for excellence in design and impeccable"</p>
            </article>
            <div className="order-div">
           <button className='order-btn w-100 fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal4">See Details</button>
           </div>
        </div>

<div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Halls</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgHalls/4.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Halls</h3>
                <p className='mb-4'>Hall Name : <span style={{color:'#AC634D'}}>Vila in The Forest</span></p>
                <p className=' mb-4'>Price : <span style={{color:'#AC634D'}}>550$</span></p>
                <p className='mb-4'>Number of persons: <span style={{color:'#AC634D'}}>600 </span></p>
            </article>
            <h5 style={{color:'#AC634D'}}>vila Reviews</h5>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-secondary"></i>

            <div className="w-100 mt-5">
                <p>Location vila:</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191829.
                72937995175!2d-7.4317826369670525!3d41.30147696724598!2m3!1f0!2f0!3f0!3m2
                !1i1024!2i768!4f13.1!3m3!1m2!1s0xd3b4ba914b3f42f%3A0x4c17e95d13927603!2z2Y
                HZitinINix2YrYp9mE2Iwg2KfZhNio2LHYqti62KfZhA!5e0!3m2!1sar!2seg!4v171078996
                3708!5m2!1sar!2seg" className='w-100 border-0' allowfullscreen="" loading="lazy"
                 referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The hall Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>

        <div className="col-lg-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgHalls/5.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>Simple Hall</h3>
                 <p style={{ color: "#695c5c"}}>"Our website strives for excellence in design and impeccable"</p>
            </article>
            <div className="order-div">
           <button className='order-btn w-100 fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal5">See Details</button>
           </div>
        </div>

<div className="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Halls</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgHalls/5.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Halls</h3>
                <p className='mb-4'>Hall Name : <span style={{color:'#AC634D'}}>Simple Hall</span></p>
                <p className=' mb-4'>Price : <span style={{color:'#AC634D'}}>390$</span></p>
                <p className='mb-4'>Number of persons: <span style={{color:'#AC634D'}}>300</span></p>
            </article>
            <h5 style={{color:'#AC634D'}}>Hall Reviews</h5>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-secondary"></i>

            <div className="w-100 mt-5">
                <p>Location Hall:</p>
  <iframe
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d173235.
   26329832058!2d11.
   793046813281254!3d47.27914470000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
   1!3m3!1m2!1s0x479d6f5ec46dc09b%3A0xa5da47d44dc4ab77!2sSalzlager%
   20Hall%20in%20Tirol!5e0!3m2!1sar!2seg!4v1710790376690!5m2!1sar!2seg"
    className='w-100 border-0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The hall Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>

        <div className="col-lg-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgHalls/6.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>Classic Hall</h3>
                 <p style={{ color: "#695c5c"}}>"Our website strives for excellence in design and impeccable"</p>
            </article>
            <div className="order-div">
           <button className='order-btn w-100 fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal6">See Details</button>
           </div>
        </div>

<div className="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Halls</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgHalls/6.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Halls</h3>
                <p className='mb-4'>Hall Name : <span style={{color:'#AC634D'}}>Classic Hall</span></p>
                <p className=' mb-4'>Price : <span style={{color:'#AC634D'}}>200$</span></p>
                <p className='mb-4'>Number of persons: <span style={{color:'#AC634D'}}>310 </span></p>
            </article>
            <h5 style={{color:'#AC634D'}}>Classic Hall Reviews</h5>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-warning"></i>
            <i className="fa-solid fa-star fa-lg text-secondary"></i>
            <i className="fa-solid fa-star fa-lg text-secondary"></i>

            <div className="w-100 mt-5">
                <p>Location Hall:</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12096.
                978380974477!2d-73.99116595541987!3d40.712631699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i
                768!4f13.1!3m3!1m2!1s0x89c25a18e3553f8b%3A0x1337dae5edaabaa2!2z2YHZhtiv2YIg2YHZiNixIN
                iz2YrYstmI2YbYsiDZhtmK2YjZitmI2LHZgyDYr9in2YjZhiDYqtin2YjZhg!5e0!3m2!1sar!2seg!4v1
                710788141920!5m2!1sar!2seg"
                 className='w-100' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The hall Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
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
    </>;
}

export default Halls;