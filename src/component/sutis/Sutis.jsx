import toast from 'react-hot-toast';
function Sutis() {

    return <>
   <section className='mt-5 pt-5 mb-5'>
<div className="container-fluid mt-5 pt-5">
    <div className="row gy-3">
        <div className="col-md-8">
       <article className='p-3'>
       <p style={{ color: "#695c5c", lineHeight: '2'}}> Wedding Suits & Tuxedos presents four collections of modern
        suiting which beautifully blends classic lines with thoughtful detailing and an on-trend fit. 
        Our line of men’s and women’s wedding suits has something for everyone. Explore both traditional
         and modern men’s wedding suits in a range of styles and colors to suit grooms and their groomsmen.
          Find a timeless look with our luxurious velvet jackets, or choose something sleek and modern with
           dark blue, brown, or light gray merino wool.</p>
       </article>
        </div>
        <div className="col-md-4">
          <figure>
            <img className='w-100 rounded-2' src={require('../../imges/imgSutis/ImgStatic.jpg')} alt="" />
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
                <img className='w-100 rounded-2' src={require('../../imges/imgSutis/1.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>Denim Blue</h3>
                 <p style={{ color: "#695c5c"}}> Men provides luxury and comfort for the modern gentleman.</p>
            </article>
             <div className="order-div">
           <button className='order-btn w-100 fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal">See Details</button>
           </div>
        </div>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Sutis</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgSutis/1.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Sutis</h3>
                <p className='mb-4'>Suit Name : <span style={{color:'#AC634D'}}> Denim Blue</span></p>
                <p mb-4>Price : <span style={{color:'#AC634D'}}>200$</span></p>
            </article>
            <h5 className='mb-2' style={{color:'#AC634D'}}>Sizes currently available :</h5>
            <input type="checkbox" id='s' name='sizes' value={'s'}/>
            <label htmlFor="s">S</label>
            <br />
            <input type="checkbox" id='m' name='sizes' value={'m'}/>
            <label htmlFor="m" > M</label>
            <br />
            <input  type="checkbox" id='l' name='sizes' value={'l'}/>
            <label htmlFor="l" > L</label>
            <br />
            <input  type="checkbox" id='xl' name='sizes' value={'xl'}/>
            <label htmlFor="xl" > XL</label>
            <br />
            <h5 className='mt-3' style={{color:'#AC634D'}}>Colors currently available :</h5>
            <div className="mt-3">
                <input type="checkbox" id='cricale1' name='colors' value={'1'} />
                <label htmlFor="cricale1"> <div  style={{backgroundColor:"black",height:'25px',width:'25px',borderRadius:'50%'}}
                 className="mx-2"></div> </label>
<br />
                <input type="checkbox" id='cricale2' name='colors' value={'2'} />
                <label htmlFor="cricale2"> <div style={{backgroundColor:"#304F4F",height:'25px',width:'25px',borderRadius:'50%'}} 
                className="mx-2"></div> </label>
<br />
                <input type="checkbox" id='cricale3' name='colors' value={'3'} />
                <label htmlFor="cricale3"> <div style={{backgroundColor:"#B8B6C1",height:'25px',width:'25px',borderRadius:'50%'}}
                 className=" mx-2"></div> </label>
                
            </div>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The Suit Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>

        <div className="col-lg-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgSutis/2.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>Emerald Green</h3>
                 <p style={{ color: "#695c5c"}}> Men provides luxury and comfort for the modern gentleman.</p>
            </article>
            <div className="order-div">
           <button className='order-btn w-100 fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal2">See Details</button>
           </div>
        </div>

 <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Sutis</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgSutis/2.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Sutis</h3>
                <p className='mb-4'>Suit Name : <span style={{color:'#AC634D'}}>Emerald Green</span></p>
                <p mb-4>Price : <span style={{color:'#AC634D'}}>100$</span></p>
            </article>
            <h5 className='mb-2' style={{color:'#AC634D'}}>Sizes currently available :</h5>
            <input type="checkbox" id='s1' name='sizes' value={'s'}/>
            <label htmlFor="s1">S</label>
            <br />
            <input type="checkbox" id='m1' name='sizes' value={'m'}/>
            <label htmlFor="m1" > M</label>
            <br />
            <input  type="checkbox" id='l1' name='sizes' value={'l'}/>
            <label htmlFor="l1" > L</label>
            <br />
            <input  type="checkbox" id='xl1' name='sizes' value={'xl'}/>
            <label htmlFor="xl1" > XL</label>
            <br />
            <h5 className='mt-3' style={{color:'#AC634D'}}>Colors currently available :</h5>
            <div className="mt-3">
                <input type="checkbox" id='c' name='colors' value={'1'} />
                <label htmlFor="c"> <div  style={{backgroundColor:"#304F4F",height:'25px',width:'25px',borderRadius:'50%'}}
                 className="mx-2"></div> </label>
<br />
                <input type="checkbox" id='c1' name='colors' value={'2'} />
                <label htmlFor="c1"> <div style={{backgroundColor:"#BAB8C3",height:'25px',width:'25px',borderRadius:'50%'}} 
                className="mx-2"></div> </label>
<br />
                <input type="checkbox" id='c2' name='colors' value={'3'} />
                <label htmlFor="c2"> <div style={{backgroundColor:"black",height:'25px',width:'25px',borderRadius:'50%'}} 
                className=" mx-2"></div> </label>
                
            </div>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The Suit Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>

        <div className="col-lg-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgSutis/3.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>Beige</h3>
                 <p style={{ color: "#695c5c"}}> Men provides luxury and comfort for the modern gentleman.</p>
            </article>
            <div className="order-div">
           <button className='order-btn w-100 fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal3">See Details</button>
           </div>
        </div>

<div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Sutis</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgSutis/3.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Sutis</h3>
                <p className='mb-4'>Suit Name : <span style={{color:'#AC634D'}}>Beige</span></p>
                <p mb-4>Price : <span style={{color:'#AC634D'}}>120$</span></p>
            </article>
            <h5 className='mb-2' style={{color:'#AC634D'}}>Sizes currently available :</h5>
            <input type="checkbox" id='s2' name='sizes' value={'s'}/>
            <label htmlFor="s2">S</label>
            <br />
            <input type="checkbox" id='m3' name='sizes' value={'m'}/>
            <label htmlFor="m3" > M</label>
            <br />
            <input  type="checkbox" id='l3' name='sizes' value={'l'}/>
            <label htmlFor="l3" > L</label>
            <br />
            <input  type="checkbox" id='xl3' name='sizes' value={'xl'}/>
            <label htmlFor="xl3" > XL</label>
            <br />
            <h5 className='mt-3' style={{color:'#AC634D'}}>Colors currently available :</h5>
            <div className="mt-3">
                <input type="checkbox" id='a' name='colors' value={'1'} />
                <label htmlFor="a"> <div  style={{backgroundColor:"#B5B4B1",height:'25px',width:'25px',borderRadius:'50%'}}
                 className="mx-2"></div> </label>
<br />
                <input type="checkbox" id='b' name='colors' value={'2'} />
                <label htmlFor="b"> <div style={{backgroundColor:"#304F4F",height:'25px',width:'25px',borderRadius:'50%'}} 
                className="mx-2"></div> </label>
<br />
                <input type="checkbox" id='e' name='colors' value={'3'} />
                <label htmlFor="e"> <div style={{backgroundColor:"black",height:'25px',width:'25px',borderRadius:'50%'}} 
                className=" mx-2"></div> </label>
                
            </div>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The Suit Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>

        <div className="col-lg-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgSutis/4.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>Dark Brown</h3>
                 <p style={{ color: "#695c5c"}}> Men provides luxury and comfort for the modern gentleman.</p>
            </article>
            <div className="order-div">
           <button className='order-btn w-100 fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal4">See Details</button>
           </div>
        </div>

<div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Sutis</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgSutis/4.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Sutis</h3>
                <p className='mb-4'>Suit Name : <span style={{color:'#AC634D'}}>Dark Brown</span></p>
                <p mb-4>Price : <span style={{color:'#AC634D'}}>140$</span></p>
            </article>
            <h5 className='mb-2' style={{color:'#AC634D'}}>Sizes currently available :</h5>
            <input type="checkbox" id='s4' name='sizes' value={'s'}/>
            <label htmlFor="s4">S</label>
            <br />
            <input type="checkbox" id='m4' name='sizes' value={'m'}/>
            <label htmlFor="m4" > M</label>
            <br />
            <input  type="checkbox" id='l4' name='sizes' value={'l'}/>
            <label htmlFor="l4" > L</label>
            <br />
            <input  type="checkbox" id='xl4' name='sizes' value={'xl'}/>
            <label htmlFor="xl4" > XL</label>
            <br />
            <h5 className='mt-3' style={{color:'#AC634D'}}>Colors currently available :</h5>
            <div className="mt-3">
                <input type="checkbox" id='f' name='colors' value={'1'} />
                <label htmlFor="f"> <div  style={{backgroundColor:"#443B36",height:'25px',width:'25px',borderRadius:'50%'}} 
                className="mx-2"></div> </label>
<br />
                <input type="checkbox" id='g' name='colors' value={'2'} />
                <label htmlFor="g"> <div style={{backgroundColor:"#561F3D",height:'25px',width:'25px',borderRadius:'50%'}} 
                className="mx-2"></div> </label>
<br />
                <input type="checkbox" id='h' name='colors' value={'3'} />
                <label htmlFor="h"> <div style={{backgroundColor:"black",height:'25px',width:'25px',borderRadius:'50%'}}
                 className=" mx-2"></div> </label>
                
            </div>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The Suit Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>

        <div className="col-lg-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgSutis/5.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>platinum Velvet</h3>
                 <p style={{ color: "#695c5c"}}> Men provides luxury and comfort for the modern gentleman.</p>
            </article>
            <div className="order-div">
           <button className='order-btn w-100 fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal5">See Details</button>
           </div>
        </div>

<div className="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Sutis</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgSutis/5.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Sutis</h3>
                <p className='mb-4'>Suit Name : <span style={{color:'#AC634D'}}>platinum Velvet</span></p>
                <p mb-4>Price : <span style={{color:'#AC634D'}}>160$</span></p>
            </article>
            <h5 className='mb-2' style={{color:'#AC634D'}}>Sizes currently available :</h5>
            <input type="checkbox" id='s5' name='sizes' value={'s'}/>
            <label htmlFor="s5">S</label>
            <br />
            <input type="checkbox" id='m5' name='sizes' value={'m'}/>
            <label htmlFor="m5" > M</label>
            <br />
            <input  type="checkbox" id='l5' name='sizes' value={'l'}/>
            <label htmlFor="l5" > L</label>
            <br />
            <input  type="checkbox" id='xl5' name='sizes' value={'xl'}/>
            <label htmlFor="xl5" > XL</label>
            <br />
            <h5 className='mt-3' style={{color:'#AC634D'}}>Colors currently available :</h5>
            <div className="mt-3">
                <input type="checkbox" id='i' name='colors' value={'1'} />
                <label htmlFor="i"> <div  style={{backgroundColor:"#BCBAC5",height:'25px',width:'25px',borderRadius:'50%'}}
                 className="mx-2"></div> </label>
<br />
                <input type="checkbox" id='j' name='colors' value={'2'} />
                <label htmlFor="j"> <div style={{backgroundColor:"#2E5655",height:'25px',width:'25px',borderRadius:'50%'}}
                 className="mx-2"></div> </label>
<br />
                <input type="checkbox" id='k' name='colors' value={'3'} />
                <label htmlFor="k"> <div style={{backgroundColor:"#92867D",height:'25px',width:'25px',borderRadius:'50%'}} 
                className=" mx-2"></div> </label>
                
            </div>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The Suit Was Ordered successfully",{position:'top-right',duration:2000})}
    className=' order-btn'>Order Now</button>
        <button type="button" className="order-btn" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>

        <div className="col-lg-4">
            <figure>
                <img className='w-100 rounded-2' src={require('../../imges/imgSutis/6.jpg')} alt="dress" />
            </figure>
            <article>
                <h3>Cranberry velvet</h3>
                 <p style={{ color: "#695c5c"}}> Men provides luxury and comfort for the modern gentleman.</p>
            </article>
            <div className="order-div">
           <button className='order-btn w-100 fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal6">See Details</button>
           </div>
        </div>

<div className="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" style={{color:'#AC634D'}} id="exampleModalLabel">From Collections Sutis</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <div className="row">
        <div className="col-lg-6">
        <figure>
      <img className='w-100 rounded-2' src={require('../../imges/imgSutis/6.jpg')} alt="dress" />
     </figure>
        </div>
        <div className="col-lg-6">
            <article>
                <h3 className='mb-5' style={{color:'#AC634D'}}>Collecations Sutis</h3>
                <p className='mb-4'>Suit Name : <span style={{color:'#AC634D'}}>Cranberry velvet</span></p>
                <p mb-4>Price : <span style={{color:'#AC634D'}}>100$</span></p>
            </article>
            <h5 className='mb-2' style={{color:'#AC634D'}}>Sizes currently available :</h5>
            <input type="checkbox" id='s6' name='sizes' value={'s'}/>
            <label htmlFor="s6">S</label>
            <br />
            <input type="checkbox" id='m6' name='sizes' value={'m'}/>
            <label htmlFor="m6" > M</label>
            <br />
            <input  type="checkbox" id='l6' name='sizes' value={'l'}/>
            <label htmlFor="l6" > L</label>
            <br />
            <input  type="checkbox" id='xl6' name='sizes' value={'xl'}/>
            <label htmlFor="xl6" > XL</label>
            <br />
            <h5 className='mt-3' style={{color:'#AC634D'}}>Colors currently available :</h5>
            <div className="mt-3">
                <input type="checkbox" id='v' name='colors' value={'1'} />
                <label htmlFor="v"> <div  style={{backgroundColor:"#883A61",height:'25px',width:'25px',borderRadius:'50%'}} 
                className="mx-2"></div> </label>
<br />
                <input type="checkbox" id='n' name='colors' value={'2'} />
                <label htmlFor="n"> <div style={{backgroundColor:"#304F4F",height:'25px',width:'25px',borderRadius:'50%'}}
                 className="mx-2"></div> </label>
<br />
                <input type="checkbox" id='o' name='colors' value={'3'} />
                <label htmlFor="o"> <div style={{backgroundColor:"#B8B6C1",height:'25px',width:'25px',borderRadius:'50%'}} 
                className=" mx-2"></div> </label>
                
            </div>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button onClick={()=>toast.success("The Suit Was Ordered successfully",{position:'top-right',duration:2000})}
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

export default Sutis;