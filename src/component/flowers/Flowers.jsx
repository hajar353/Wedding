import toast from 'react-hot-toast';
function Flowers() {
    return <>
    <section className='mt-5 pt-5 mb-5'>
<div className="container-fluid mt-5 pt-5">
    <div className="row gy-3">
        <div className="col-md-8">
       <article className='p-3'>
       <p style={{ color: "#695c5c", lineHeight: '2'}}>our site pursues excellence in design and 
       irreproachable craftsmanship to create a gown worthy of a bride’s
                 most treasured moments.
                  We believe brides should feel nothing less than gorgeous on their wedding day.
                  Our designs blend rich fabrics like satin and lace with decadent beading and detailing, 
                that embody the unique style of our brides.</p>
       </article>
        </div>
        <div className="col-md-4">
          <figure className='text-center'>
            <img className='w-75 rounded-2' src={require('../../imges/imgFlowers/imgStatic.jpg')} alt="" />
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
                <img className='w-100 rounded-2' src={require('../../imges/imgFlowers/1.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>white & rose</h3>
                 <p style={{ color: "#695c5c"}}>"Matte lace appliques adorn the sparkle tulle overlay
                  of this strappy sheath wedding dress."</p>
            </article>
             <div className="order-div">
           <button className='order-btn w-100 fw-bold'  data-bs-toggle="modal" data-bs-target="#exampleModal">See Details</button>
           </div>
        </div>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Flowers</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgFlowers/1.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Flowers</h3>
                <p className='mb-4'>Flower color: <span style={{color:'#AC634D'}}>white & rose</span></p>
                <p className='mb-4'>Type of flowers: <span style={{color:'#AC634D'}}>Rose</span></p>
                <p className=' mb-2'>Price : <span style={{color:'#AC634D'}}>50$</span></p>
            </article>
            <h5 className='mb-3' style={{color:'#AC634D'}}>Type of flowers currently available :</h5>
            <input type="checkbox" id='rose1' />
            <label htmlFor="rose1" className='mx-1'>Rose</label>
            <br />
            <input type="checkbox" id='lilac1' />
            <label htmlFor="lilac1" className='mx-1'>Lilac</label>
            <br />
            <input type="checkbox" id='peony1' />
            <label htmlFor="peony1" className='mx-1'>Peoney</label>
            <br />
            <input type="checkbox" id='tulip1' />
            <label htmlFor="tulip1" className='mx-1'>Tulip</label>
            <br />

            <h5 className='mb-3 mt-2' style={{color:'#AC634D'}}>flower Color currently available :</h5>
            <input type="checkbox" id='w1' />
            <label htmlFor="w1" className='mx-1'>white & rose</label>
            <br />
            <input type="checkbox" id='r1' />
            <label htmlFor="r1" className='mx-1'>white & red</label>
            <br />
            <input type="checkbox" id='h1' />
            <label htmlFor="h1" className='mx-1'>white & lightOrange</label>
            <br />
            <input type="checkbox" id='t1' />
            <label htmlFor="t1" className='mx-1'>white & rose</label>
            <br />
            <input type="checkbox" id='n1' />
            <label htmlFor="n1" className='mx-1'>white & purple</label>
            <br />
            <input type="checkbox" id='x1' />
            <label htmlFor="x1" className='mx-1'>white & skyBlue</label>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The Bouquets of flowers Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>

        <div className="col-lg-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgFlowers/2.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>white & red</h3>
                 <p style={{ color: "#695c5c"}}>Matte lace appliques adorn the sparkle tulle overlay of 
                 this strappy sheath wedding dress.</p>
            </article>

             <div className="order-div">
           <button className='order-btn w-100 fw-bold'  data-bs-toggle="modal" data-bs-target="#exampleModal2">See Details</button>
           </div>
        </div>

<div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Flowers</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgFlowers/2.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Flowers</h3>
                <p className='mb-4'>Flower color: <span style={{color:'#AC634D'}}>white & red</span></p>
                <p className='mb-4'>Type of flowers: <span style={{color:'#AC634D'}}>Rose</span></p>
                <p className=' mb-2'>Price : <span style={{color:'#AC634D'}}>40$</span></p>
            </article>
            <h5 className='mb-3' style={{color:'#AC634D'}}>Type of flowers currently available :</h5>
            <input type="checkbox" id='rose2' />
            <label htmlFor="rose2" className='mx-1'>Rose</label>
            <br />
            <input type="checkbox" id='lilac2' />
            <label htmlFor="lilac2" className='mx-1'>Lilac</label>
            <br />
            <input type="checkbox" id='peony2' />
            <label htmlFor="peony2" className='mx-1'>Peoney</label>
            <br />
            <input type="checkbox" id='tulip2' />
            <label htmlFor="tulip2" className='mx-1'>Tulip</label>
            <br />

            <h5 className='mb-3 mt-2' style={{color:'#AC634D'}}>flower Color currently available :</h5>
            <input type="checkbox" id='w2' />
            <label htmlFor="w2" className='mx-1'>white & rose</label>
            <br />
            <input type="checkbox" id='r2' />
            <label htmlFor="r2" className='mx-1'>white & red</label>
            <br />
            <input type="checkbox" id='h2' />
            <label htmlFor="h2" className='mx-1'>white & lightOrange</label>
            <br />
            <input type="checkbox" id='t2' />
            <label htmlFor="t2" className='mx-1'>white & rose</label>
            <br />
            <input type="checkbox" id='n2' />
            <label htmlFor="n2" className='mx-1'>white & purple</label>
            <br />
            <input type="checkbox" id='x2' />
            <label htmlFor="x2" className='mx-1'>white & skyBlue</label>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The Bouquets of flowers Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>

        <div className="col-lg-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgFlowers/3.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>white & lightOrange</h3>
                 <p style={{ color: "#695c5c"}}>Matte lace appliques adorn the sparkle 
                 tulle overlay of this strappy sheath wedding dress.</p>
            </article>

             <div className="order-div">
           <button className='order-btn w-100 fw-bold'  data-bs-toggle="modal" data-bs-target="#exampleModal3">See Details</button>
           </div>
        </div>

<div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Flowers</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgFlowers/3.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Flowers</h3>
                <p className='mb-4'>Flower color: <span style={{color:'#AC634D'}}>white & lightOrange</span></p>
                <p className='mb-4'>Type of flowers: <span style={{color:'#AC634D'}}>Rose</span></p>
                <p className=' mb-2'>Price : <span style={{color:'#AC634D'}}>35$</span></p>
            </article>
            <h5 className='mb-3' style={{color:'#AC634D'}}>Type of flowers currently available :</h5>
            <input type="checkbox" id='rose3' />
            <label htmlFor="rose3" className='mx-1'>Rose</label>
            <br />
            <input type="checkbox" id='lilac3' />
            <label htmlFor="lilac3" className='mx-1'>Lilac</label>
            <br />
            <input type="checkbox" id='peony3' />
            <label htmlFor="peony3" className='mx-1'>Peoney</label>
            <br />
            <input type="checkbox" id='tulip3' />
            <label htmlFor="tulip3" className='mx-1'>Tulip</label>
            <br />

            <h5 className='mb-3 mt-2' style={{color:'#AC634D'}}>flower Color currently available :</h5>
            <input type="checkbox" id='w3' />
            <label htmlFor="w3" className='mx-1'>white & rose</label>
            <br />
            <input type="checkbox" id='r3' />
            <label htmlFor="r3" className='mx-1'>white & red</label>
            <br />
            <input type="checkbox" id='h3' />
            <label htmlFor="h3" className='mx-1'>white & lightOrange</label>
            <br />
            <input type="checkbox" id='t3' />
            <label htmlFor="t3" className='mx-1'>white & rose</label>
            <br />
            <input type="checkbox" id='n3' />
            <label htmlFor="n3" className='mx-1'>white & purple</label>
            <br />
            <input type="checkbox" id='x3' />
            <label htmlFor="x3" className='mx-1'>white & skyBlue</label>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The Bouquets of flowers Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>

        <div className="col-lg-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgFlowers/4.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>white & rose</h3>
                 <p style={{ color: "#695c5c"}}>"Matte lace appliques adorn the sparkle tulle overlay of this 
                 strappy sheath wedding dress."</p>
            </article>

             <div className="order-div">
           <button className='order-btn w-100 fw-bold'  data-bs-toggle="modal" data-bs-target="#exampleModal4">See Details</button>
           </div>
        </div>

 <div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Flowers</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgFlowers/4.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Flowers</h3>
                <p className='mb-4'>Flower color: <span style={{color:'#AC634D'}}>white & rose</span></p>
                <p className='mb-4'>Type of flowers: <span style={{color:'#AC634D'}}>Rose</span></p>
                <p className=' mb-2'>Price : <span style={{color:'#AC634D'}}>50$</span></p>
            </article>
            <h5 className='mb-3' style={{color:'#AC634D'}}>Type of flowers currently available :</h5>
            <input type="checkbox" id='rose4' />
            <label htmlFor="rose4" className='mx-1'>Rose</label>
            <br />
            <input type="checkbox" id='lilac4' />
            <label htmlFor="lilac4" className='mx-1'>Lilac</label>
            <br />
            <input type="checkbox" id='peony4' />
            <label htmlFor="peony4" className='mx-1'>Peoney</label>
            <br />
            <input type="checkbox" id='tulip4' />
            <label htmlFor="tulip4" className='mx-1'>Tulip</label>
            <br />

            <h5 className='mb-3 mt-2' style={{color:'#AC634D'}}>flower Color currently available :</h5>
            <input type="checkbox" id='w4' />
            <label htmlFor="w4" className='mx-1'>white & rose</label>
            <br />
            <input type="checkbox" id='r4' />
            <label htmlFor="r4" className='mx-1'>white & red</label>
            <br />
            <input type="checkbox" id='h4' />
            <label htmlFor="h4" className='mx-1'>white & lightOrange</label>
            <br />
            <input type="checkbox" id='t4' />
            <label htmlFor="t4" className='mx-1'>white & rose</label>
            <br />
            <input type="checkbox" id='n4' />
            <label htmlFor="n4" className='mx-1'>white & purple</label>
            <br />
            <input type="checkbox" id='x4' />
            <label htmlFor="x4" className='mx-1'>white & skyBlue</label>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The Bouquets of flowers Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>

        <div className="col-lg-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgFlowers/5.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>white & purple</h3>
                 <p style={{ color: "#695c5c"}}>Matte lace appliques adorn the sparkle tulle overlay of this strappy
                  sheath wedding dress.</p>
            </article>

             <div className="order-div">
           <button className='order-btn w-100 fw-bold'  data-bs-toggle="modal" data-bs-target="#exampleModal5">See Details</button>
           </div>
        </div>

<div className="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Flowers</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgFlowers/5.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Flowers</h3>
                <p className='mb-4'>Flower color: <span style={{color:'#AC634D'}}>white & purple</span></p>
                <p className='mb-4'>Type of flowers: <span style={{color:'#AC634D'}}>Rose & Lilac</span></p>
                <p className=' mb-2'>Price : <span style={{color:'#AC634D'}}>55$</span></p>
            </article>
            <h5 className='mb-3' style={{color:'#AC634D'}}>Type of flowers currently available :</h5>
            <input type="checkbox" id='rose5' />
            <label htmlFor="rose5" className='mx-1'>Rose</label>
            <br />
            <input type="checkbox" id='lilac5' />
            <label htmlFor="lilac5" className='mx-1'>Lilac</label>
            <br />
            <input type="checkbox" id='peony5' />
            <label htmlFor="peony5" className='mx-1'>Peoney</label>
            <br />
            <input type="checkbox" id='tulip5' />
            <label htmlFor="tulip5" className='mx-1'>Tulip</label>
            <br />

            <h5 className='mb-3 mt-2' style={{color:'#AC634D'}}>flower Color currently available :</h5>
            <input type="checkbox" id='w5' />
            <label htmlFor="w5" className='mx-1'>white & rose</label>
            <br />
            <input type="checkbox" id='r5' />
            <label htmlFor="r5" className='mx-1'>white & red</label>
            <br />
            <input type="checkbox" id='h5' />
            <label htmlFor="h5" className='mx-1'>white & lightOrange</label>
            <br />
            <input type="checkbox" id='t5' />
            <label htmlFor="t5" className='mx-1'>white & rose</label>
            <br />
            <input type="checkbox" id='n5' />
            <label htmlFor="n5" className='mx-1'>white & purple</label>
            <br />
            <input type="checkbox" id='x5' />
            <label htmlFor="x5" className='mx-1'>white & skyBlue</label>

        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The Bouquets of flowers Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>

        <div className="col-lg-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgFlowers/6.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>white & skyBlue</h3>
                 <p style={{ color: "#695c5c"}}>Matte lace appliques adorn the sparkle tulle overlay of this strappy sheath wedding dress.</p>
            </article>

             <div className="order-div">
           <button className='order-btn w-100 fw-bold'  data-bs-toggle="modal" data-bs-target="#exampleModal6">See Details</button>
           </div>
        </div>

<div className="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Flowers</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgFlowers/6.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Flowers</h3>
                <p className='mb-4'>Flower color: <span style={{color:'#AC634D'}}>white & skyBlue</span></p>
                <p className='mb-4'>Type of flowers: <span style={{color:'#AC634D'}}>Camelia</span></p>
                <p className=' mb-2'>Price : <span style={{color:'#AC634D'}}>40$</span></p>
            </article>
            <h5 className='mb-3' style={{color:'#AC634D'}}>Type of flowers currently available :</h5>
            <input type="checkbox" id='rose6' />
            <label htmlFor="rose6" className='mx-1'>Rose</label>
            <br />
            <input type="checkbox" id='lilac6' />
            <label htmlFor="lilac6" className='mx-1'>Lilac</label>
            <br />
            <input type="checkbox" id='peony6' />
            <label htmlFor="peony6" className='mx-1'>Peoney</label>
            <br />
            <input type="checkbox" id='tulip6' />
            <label htmlFor="tulip6" className='mx-1'>Tulip</label>
            <br />

            <h5 className='mb-3 mt-2' style={{color:'#AC634D'}}>flower Color currently available :</h5>
            <input type="checkbox" id='w6' />
            <label htmlFor="w6" className='mx-1'>white & rose</label>
            <br />
            <input type="checkbox" id='r6' />
            <label htmlFor="r6" className='mx-1'>white & red</label>
            <br />
            <input type="checkbox" id='h6' />
            <label htmlFor="h6" className='mx-1'>white & lightOrange</label>
            <br />
            <input type="checkbox" id='t6' />
            <label htmlFor="t6" className='mx-1'>white & rose</label>
            <br />
            <input type="checkbox" id='n6' />
            <label htmlFor="n6" className='mx-1'>white & purple</label>
            <br />
            <input type="checkbox" id='x6' />
            <label htmlFor="x6" className='mx-1'>white & skyBlue</label>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The Bouquets of flowers Was Ordered successfully",{position:'top-right',duration:2000})}
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

export default Flowers;