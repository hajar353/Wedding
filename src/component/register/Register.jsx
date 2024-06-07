import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

function Register() {

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
  name: "",
  email:"",
  password:"",
  rePassword:"",
  phone:""
}

async function RegistreUser(values){

  setisLoading(true)

  try{
    const{data}=await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)

    if(data.message === 'success'){
      setSuccsesMeesg('Account has created succssfully');
      setTimeout(function(){
        navigate('/login')

      },1000)
    }

  }
  catch(error){
     console.log(error.response.data.message);
     setErrMeesg(error.response.data.message)
  }

setisLoading(false)

}
const formik= useFormik ({
  initialValues:user,
  onSubmit : RegistreUser,
  validate:function(values){
    setErrMeesg(null);
   const errors= {};

if(values.name.length < 3 || values.name.length > 10 ){
    errors.name="Name must be from 3 characters to 10 characters... "
}
if(values.email.includes("@") ===false || values.email.includes(".") ===false || values.email.includes("com")===false){
  errors.email="Email invalid.. "
}
if( ! values.phone.match(/^(02)?01[0125][0-9]{8}$/) ){
  errors.phone="Phone invaild.."
}
if(values.password.length < 6 || values.password.length > 12 ){
  errors.password="Password must be from 6 characters to 12 characters... "
}
if(values.rePassword !== values.password ){
  errors.rePassword="Password & rePassword it dosen't match "
}

   return errors

  }
})
   
       
    return <>
    <section className="mt-5 pt-5 mb-5">
      <div className="pt-5 mt-5">
        <div>
          <div className="mb-3">
            <h1 style={{color:'#AC634D',}} className="text-center" >register Now.... </h1>
          </div>
         {errMeesg? <div className="alert alert-danger w-75 m-auto p-1 mb-3">   <i className="fa-solid fa-triangle-exclamation"></i>   {errMeesg}</div>:'' }
         {succsesMeesg? <div className="alert alert-success w-75 m-auto p-1 mb-3">   <i className="fa-solid fa-circle-check"></i> {succsesMeesg} </div>:'' }
          <form className="form m-auto" onSubmit={formik.handleSubmit} >
          <div className="mb-3 overflow-hidden">
            <label htmlFor="name" className="form-label user">Name :</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} onKeyUp={() => inputKeyUp('user', 'name')} type="name" className="form-control" id="name" placeholder="Name" />
          </div>
         {formik.errors.name && formik.touched.name ? <div className="alert alert-danger p-1"> <i className="fa-solid fa-triangle-exclamation"></i> {formik.errors.name}</div>:''}

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

          <div className="mb-3 overflow-hidden">
            <label htmlFor="rePassword" className="form-label rePasswordClass">rePassword :</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} onKeyUp={() => inputKeyUp('rePasswordClass', 'rePassword')} type="password" className="form-control" id="rePassword" placeholder="rePassword" />
          </div>
          {formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger p-1"> <i className="fa-solid fa-triangle-exclamation"></i> {formik.errors.rePassword}</div>:''}

          <div className="mb-3 overflow-hidden">
            <label htmlFor="phone" className="form-label phoneClass">phone :</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} onKeyUp={() => inputKeyUp('phoneClass', 'phone')} type="tel" className="form-control" id="phone" placeholder="Phone" />
          </div>
          {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger p-1"> <i className="fa-solid fa-triangle-exclamation"></i> {formik.errors.phone}</div>:''}

          <button type="submit" className="rounded-3 butRegister mt-5">
           
  {isLoading?          <RotatingLines

  strokeColor="brown"
  strokeWidth="5"
  animationDuration="0.75"
  width="30"
  visible={true}
/>:'Register Now'}
        
            </button>
        </form>
        </div>
      </div>
  </section>

    </>;
}
export default Register;
