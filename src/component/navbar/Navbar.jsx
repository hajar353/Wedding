import dance from "../../imges/dance.png"
import dresses from "../../imges/wedding-dress.png"
import flower  from '../../imges/bouquet.png'
import halls from '../../imges/wedding-arch.png'
import suit from '../../imges/groom-suit.png'
import contact from '../../imges/contact.png'
import Logout from '../../imges/logout.png'
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { authContext } from "../../context/authentication"

function Navbar() {
const {token , setToken} =  useContext( authContext );
const navFunc = useNavigate()
function logout(){
  localStorage.removeItem( "tkn" );
  setToken(null);
  navFunc('/login');
}

   function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  }

    return <>
<div className="fixed-top mb-5 bg-white">
<div className="text-center bg" >
{token ?<>
  <Link onClick={()=>scrollToTop()} className="navbar-brand" to="/home">
  <img className="w-10 mx-2" src={dance} alt="dance" /><h1 className="h3 wedding d-inline-block">Wedding</h1></Link></>:''}

</div>
{token?<>
  <div className="d-flex">
<hr className="w-50 me-1" />
<div className="rotate1"></div> 
<hr className="w-50 mx-1"
 /></div></>:''}

    <nav className="navbar navbar-expand-lg">
    
  <div className="container-fluid">

   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-bars text-white"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-1 mb-lg-0">
    {token ? <>
      <li className="nav-item">
          <Link onClick={ ()=>scrollToTop()} className="nav-link active"aria-current="page" to="/dresses"><img  src={dresses} alt="dresses" /> Dresses</Link>
  
        </li> 
        <li className="mx-4" >
<div className="rotate"></div>
        </li>
   

        <li className="nav-item">
          <Link onClick={ ()=>scrollToTop()} className="nav-link" to="/sutis"> <img src={suit} alt="suit" /> Suits</Link>
        </li> 
        
        <li className="mx-4" >
<div className="rotate"></div>
        </li>
       
        <li className="nav-item">
          <Link onClick={ ()=>scrollToTop()} className="nav-link" to="/halls"> <img src={halls} alt="halls" /> Wedding halls</Link>
        </li> 

        <li className="mx-4" >
<div className="rotate"></div>
        </li>

        <li className="nav-item">
          <Link onClick={ ()=>scrollToTop()} className="nav-link" to="/flowers"><img src={flower} alt="flowers" />
          Bouquets of flowers</Link>
        </li>
    </> :''}

      </ul>
      <ul className="navbar-nav  mb-1 mb-lg-0">
        
        {token?<>
        
          <li className="nav-item">
          <span onClick={logout} className="nav-link cursor"><img src={Logout} alt="" /> log out</span>
        </li>
        </>:<>
        <li className="nav-item">
          <Link onClick={ ()=>scrollToTop()} className="nav-link" to="/login"><img src={contact} alt="login" className="mx-1" />
          Login</Link>
        </li>

        <li className="mx-4" >
<div className="rotate"></div>
        </li>

        <li className="nav-item">
          <Link onClick={ ()=>scrollToTop()} className="nav-link" to="/register"><img src={contact} alt="register" className="mx-1" />
          Register</Link>
        </li>
        </>}
      </ul>
    </div>
  </div>

</nav>
</div>
    </>;
}
export default Navbar;