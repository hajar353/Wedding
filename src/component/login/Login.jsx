import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/authentication";

function Login() {
  const {setToken} = useContext( authContext );
    
     const [errMeesg,setErrMeesg] =useState(null);
  const [succsesMeesg,setSuccsesMeesg] =useState(null);
  const [isLoading,setisLoading] =useState(false);
  
const navigate=  useNavigate();

function inputKeyUp(classValue = '', idValue = ''){ 

    if (document.getElementById(`${idValue}`).value === '') {
        document.querySelector(`.${classValue}`).style.top = '70px';
      }
      else {
        document.querySelector(`.${classValue}`).style.top = '0';
      }
 
}

let user ={

  email:"",
  password:"",
 
}


async function loginUser(values){

  setisLoading(true)

  try{
    const{data}=await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values)

    if(data.message === 'success'){
      localStorage.setItem( 'tkn', data.token );
      setToken(data.token)

      setSuccsesMeesg('Account has created succssfully');
      setTimeout(function(){
        navigate('/home')

      },50)
    }

  }
  catch(error){
    
     setErrMeesg(error.response.data.message)
  }

setisLoading(false)

}

const formik= useFormik ({

  initialValues:user,
 
  onSubmit : loginUser,

  validate:function(values){
    setErrMeesg(null);
   const errors= {};


if(values.email.includes("@") ===false || values.email.includes(".") ===false || values.email.includes("com")===false){
  errors.email="Email invalid.. "
}

if(values.password.length < 6 || values.password.length > 12 ){
  errors.password="Password must be from 6 characters to 12 characters... "
}



   return errors

  }
})
   
       
    return <>
    <section className="mt-5 pt-5"> 
      <div className="pt-5 mb-5">
        <div className=" mt-5 mb-5 pt-5">
          <div className="mb-3 text-center">
             <h1 className="mb-1 h2 fw-bold mb-3" style={{color:'#AC634D'}}>Design your Wedding Now</h1> 
             <p style={{color:'#AC634D'}} >Welcome to Weddingo ! Enter your email to get started...</p> 
            
          </div>
         {errMeesg? <div className="alert alert-danger w-75 m-auto p-1 mb-3">   <i className="fa-solid fa-triangle-exclamation"></i>   {errMeesg}</div>:'' }
         {succsesMeesg? <div className="alert alert-success w-75 m-auto p-1 mb-3">   <i className="fa-solid fa-circle-check"></i> {succsesMeesg} </div>:'' }
          <form className="form m-auto" onSubmit={formik.handleSubmit} >
        
          <div className="mb-3 overflow-hidden">
            <label htmlFor="email" className="form-label emailClass">Email :</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} onKeyUp={() => inputKeyUp('emailClass', 'email')} type="email" className="form-control" id="email" placeholder="Email" />
          </div>
          {formik.errors.email && formik.touched.email ? <div className="alert alert-danger p-1"> <i className="fa-solid fa-triangle-exclamation"></i> {formik.errors.email}</div>:''}

          <div className="mb-3 overflow-hidden">
            <label htmlFor="password" className="form-label pass">Password :</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} onKeyUp={() => inputKeyUp('pass', 'password')} type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          {formik.errors.password && formik.touched.password ? <div className="alert alert-danger p-1"> <i className="fa-solid fa-triangle-exclamation"></i> {formik.errors.password}</div>:''}

          <button type="submit" className="rounded-3 butRegister mt-5 mb-4">
           
  {isLoading?          <RotatingLines
  strokeColor="Brown"
  strokeWidth="5"
  animationDuration="0.75"
  width="30"
  visible={true}
/>:'Login Now'}
        
            </button>
        </form>
        </div>
      </div>
  </section>
    </>;
}

export default Login;