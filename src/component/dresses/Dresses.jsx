import toast from 'react-hot-toast';
function Dresses() {
    return <>
<section className='mt-5 pt-5 mb-5'>
<div className="container-fluid mt-5 pt-5">
    <div className="row gy-3">
        <div className="col-md-8">
       <article className='p-3'>
       <p style={{ color: "#695c5c", lineHeight: '2'}}>our site pursues excellence in design and irreproachable
        craftsmanship to create a gown worthy of a bride’s
                 most treasured moments.
                  We believe brides should feel nothing less than gorgeous on their wedding day.
                  Our designs blend rich fabrics like satin and lace with decadent beading and detailing, 
                that embody the unique style of our brides.</p>
       </article>
        </div>
        <div className="col-md-4">
          <figure>
            <img className='w-100 rounded-2' src={require('../../imges/imgDresses/staticimg.jpg')} alt="" />
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
        <div className="col-md-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgDresses/1.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>Aurora</h3>
                 <p style={{ color: "#695c5c"}}>Matte lace appliques adorn the sparkle 
                 tulle overlay of this strappy sheath wedding dress.</p>
            </article>
           <div className="order-div">
           <button className='order-btn w-100 fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal">See Details</button>
           </div>
        </div>

 <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Dreeses</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgDresses/1.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Dresses</h3>
                <p className='mb-4'>Dress Name : <span style={{color:'#AC634D'}}> Aurora</span></p>
                <p mb-4>Price : <span style={{color:'#AC634D'}}>150$</span></p>
            </article>
            <h5 className='mb-2' style={{color:'#AC634D'}}>Sizes currently available :</h5>
            <input type="checkbox" id='xs' name='sizes' value={'xs'}/>
            <label htmlFor="xs">XS</label>
            <br />
            <input type="checkbox" id='s' name='sizes' value={'s'}/>
            <label htmlFor="s" > S</label>
            <br />
            <input  type="checkbox" id='m' name='sizes' value={'m'}/>
            <label htmlFor="m" > M</label>
            <br />
            <h5 className='mt-3' style={{color:'#AC634D'}}>Colors currently available :</h5>
            <div className="mt-3">
                <input type="checkbox" id='cricale1' name='colors' value={'1'} />
                <label htmlFor="cricale1"> <div className="circle1 mx-3"></div> </label>
<br />
                <input type="checkbox" id='cricale2' name='colors' value={'2'} />
                <label htmlFor="cricale2"> <div className="circle2 mx-3"></div> </label>
<br />
                <input type="checkbox" id='cricale3' name='colors' value={'3'} />
                <label htmlFor="cricale3"> <div className="circle3 mx-3"></div> </label>
                
            </div>
        </div>
    </div>
      </div>
      <div className="modal-footer">
        <button onClick={()=>toast.success("The Dress Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
    <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>

        <div className="col-md-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgDresses/2.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>Hope</h3>
                 <p style={{ color: "#695c5c"}}>Matte lace appliques adorn the sparkle tulle overlay of this strappy sheath wedding dress.</p>
            </article>
           <div className="order-div">
           <button className='order-btn w-100 fw-bold'  data-bs-toggle="modal" data-bs-target="#exampleModal2">See Details</button>
           </div>
        </div>

  <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Dreeses</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgDresses/2.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Dresses</h3>
                <p className='mb-4'>Dress Name : <span style={{color:'#AC634D'}}> Hope </span></p>
                <p mb-4>Price : <span style={{color:'#AC634D'}}>200$</span></p>
            </article>
            <h5 className='mb-2' style={{color:'#AC634D'}}>Sizes currently available :</h5>
            <input type="checkbox" id='xs2' name='sizes' value={'xs'}/>
            <label htmlFor="xs2">XS</label>
            <br />
            <input type="checkbox" id='s2' name='sizes' value={'s'}/>
            <label htmlFor="s2" > S</label>
            <br />
            <input  type="checkbox" id='m2' name='sizes' value={'m'}/>
            <label htmlFor="m2" > M</label>
            <br />
            <h5 className='mt-3' style={{color:'#AC634D'}}>Colors currently available :</h5>
            <div className="mt-3">
                <input type="checkbox" id='d' name='colors' value={'1'} />
                <label htmlFor="d"> <div className="circle1 mx-3"></div> </label>
<br />
                <input type="checkbox" id='e' name='colors' value={'2'} />
                <label htmlFor="e"> <div className="circle2 mx-3"></div> </label>
<br />
                <input type="checkbox" id='f' name='colors' value={'3'} />
                <label htmlFor="f"> <div className="circle3 mx-3"></div> </label>
                
            </div>
           
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The Dress Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>


        <div className="col-md-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgDresses/3.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>Tiana</h3>
                 <p style={{ color: "#695c5c"}}>Matte lace appliques adorn the sparkle tulle overlay of this strappy sheath wedding dress.</p>
            </article>
           <div className="order-div">
           <button className='order-btn w-100 fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal3">See Details</button>
           </div>
        </div>

 <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Dreeses</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgDresses/3.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Dresses</h3>
                <p className='mb-4'>Dress Name : <span style={{color:'#AC634D'}}> Tiana </span></p>
                <p mb-4>Price : <span style={{color:'#AC634D'}}>250$</span></p>
            </article>
            <h5 className='mb-2' style={{color:'#AC634D'}}>Sizes currently available :</h5>
            <input type="checkbox" id='xs3' name='sizes' value={'xs'}/>
            <label htmlFor="xs3">XS</label>
            <br />
            <input type="checkbox" id='s3' name='sizes' value={'s'}/>
            <label htmlFor="s3" > S</label>
            <br />
            <input  type="checkbox" id='m3' name='m' value={'m'}/>
            <label htmlFor="m3" > M</label>
            <br />
            <h5 className='mt-3' style={{color:'#AC634D'}}>Colors currently available :</h5>
            <div className="mt-3">
                <input type="checkbox" id='g' name='colors' value={'1'} />
                <label htmlFor="g"> <div className="circle1 mx-3"></div> </label>
<br />
                <input type="checkbox" id='h' name='colors' value={'2'} />
                <label htmlFor="h"> <div className="circle2 mx-3"></div> </label>
<br />

                
            </div>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The Dress Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>


        <div className="col-md-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgDresses/4.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>Ariel Veil</h3>
                 <p style={{ color: "#695c5c"}}>Matte lace appliques adorn the sparkle tulle overlay of this strappy 
                 sheath wedding dress.</p>
            </article>
           <div className="order-div">
           <button className='order-btn w-100 fw-bold'  data-bs-toggle="modal" data-bs-target="#exampleModal4">See Details</button>
           </div>
        </div>

<div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Dreeses</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgDresses/4.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Dresses</h3>
                <p className='mb-4'>Dress Name : <span style={{color:'#AC634D'}}> Ariel Veil </span></p>
                <p mb-4>Price : <span style={{color:'#AC634D'}}>150$</span></p>
            </article>
            <h5 className='mb-2' style={{color:'#AC634D'}}>Sizes currently available :</h5>
            <input type="checkbox" id='xs4' name='sizes' value={'xs'}/>
            <label htmlFor="xs4">XS</label>
            <br />
            <input type="checkbox" id='s4' name='sizes' value={'s'}/>
            <label htmlFor="s4" > S</label>
            <br />
            <input  type="checkbox" id='m4' name='m' value={'m'}/>
            <label htmlFor="m4" > M</label>
            <br />
            <h5 className='mt-3' style={{color:'#AC634D'}}>Colors currently available :</h5>
            <div className="mt-3">
                <input type="checkbox" id='i' name='colors' />
                <label htmlFor="i"> <div className="circle1 mx-3"></div> </label>
<br />

                <input type="checkbox" id='j' name='colors' />
                <label htmlFor="j"> <div className="circle3 mx-3"></div> </label>
                
            </div>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The Dress Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>

        <div className="col-md-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgDresses/5.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>Jasmine</h3>
                 <p style={{ color: "#695c5c"}}>Matte lace appliques adorn the sparkle tulle overlay of this strappy sheath wedding dress.</p>
            </article>
           <div className="order-div">
           <button className='order-btn w-100 fw-bold'  data-bs-toggle="modal" data-bs-target="#exampleModal5">See Details</button>
           </div>
        </div>

<div className="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Dreeses</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgDresses/5.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Dresses</h3>
                <p className='mb-4'>Dress Name : <span style={{color:'#AC634D'}}> Jasmine </span></p>
                <p mb-4>Price : <span style={{color:'#AC634D'}}>300$</span></p>
            </article>
            <h5 className='mb-2' style={{color:'#AC634D'}}>Sizes currently available :</h5>
            <input type="checkbox" id='xs5' name='sizes' value={'xs'}/>
            <label htmlFor="xs5">XS</label>
            <br />
            <input type="checkbox" id='s5' name='sizes' value={'s'}/>
            <label htmlFor="s5" > S</label>
            <br />
            <input  type="checkbox" id='m5' name='m' value={'m'}/>
            <label htmlFor="m5" > M</label>
            <br />
            <h5 className='mt-3' style={{color:'#AC634D'}}>Colors currently available :</h5>
            <div className="mt-3">
                <input type="checkbox" id='k' name='colors' value={'1'} />
                <label htmlFor="k"> <div className="circle1 mx-3"></div> </label>
<br />
                <input type="checkbox" id='l' name='colors' value={'2'} />
                <label htmlFor="l"> <div className="circle2 mx-3"></div> </label>
<br />
                <input type="checkbox" id='t' name='colors' value={'3'} />
                <label htmlFor="t"> <div className="circle3 mx-3"></div> </label>
                
            </div>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The Dress Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>

        <div className="col-md-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgDresses/6.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>Cinderella</h3>
                 <p style={{ color: "#695c5c"}}>Matte lace appliques adorn the sparkle tulle overlay of this strappy sheath wedding dress.</p>
            </article>
           <div className="order-div">
           <button className='order-btn w-100 fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal6">See Details</button>
           </div>
        </div>
    </div>
</div>

<div className="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Dreeses</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgDresses/6.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Dresses</h3>
                <p className='mb-4'>Dress Name : <span style={{color:'#AC634D'}}> Cinderella </span></p>
                <p mb-4>Price : <span style={{color:'#AC634D'}}>230$</span></p>
            </article>
            <h5 className='mb-2' style={{color:'#AC634D'}}>Sizes currently available :</h5>
            <input type="checkbox" id='xs6' name='sizes' value={'xs'}/>
            <label htmlFor="xs6">XS</label>
            <br />
            <input type="checkbox" id='s6' name='sizes' value={'s'}/>
            <label htmlFor="s6" > S</label>
            <br />
            <input  type="checkbox" id='m6' name='m' value={'m'}/>
            <label htmlFor="m6" > M</label>
            <br />
            <h5 className='mt-3' style={{color:'#AC634D'}}>Colors currently available :</h5>
            <div className="mt-3">
                <input type="checkbox" id='o' name='colors' value={'1'} />
                <label htmlFor="o"> <div style={{backgroundColor:"#A7B7C4",height:'25px',width:'25px',borderRadius:'50%'}} className="mx-3"></div> </label>
<br />
                <input type="checkbox" id='x' name='colors' value={'3'} />
                <label htmlFor="x"> <div className="circle2 mx-3"></div> </label>
<br />
                <input type="checkbox" id='z' name='colors' value={'2'} />
                <label htmlFor="z"> <div  className="circle1 mx-3"></div> </label>
            </div>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The Dress Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
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

export default Dresses;
