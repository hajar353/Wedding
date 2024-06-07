
import './App.css';
import Layout from './component/layout/Layout';
import Home from './component/home/Home';
import Dresses from './component/dresses/Dresses';
import Sutis from './component/sutis/Sutis';
import Halls from './component/halls/Halls';
import Flowers from './component/flowers/Flowers';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Notfound from './component/notfound/NotFound';
import { Toaster } from 'react-hot-toast';
import Register from './component/register/Register';
import Login from './component/login/Login';
import { AuthProvider } from './context/authentication';
import ProtectedRoute from './component/protectedroute/protectedroute';

const router=createHashRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:'dresses',element:<ProtectedRoute><Dresses/></ProtectedRoute>},
    {path:'sutis',element:<ProtectedRoute><Sutis/></ProtectedRoute>},
    {path:'halls',element:<ProtectedRoute><Halls/></ProtectedRoute>},
    {path:'flowers',element:<ProtectedRoute><Flowers/></ProtectedRoute>},
    {path:'register',element:<Register/>},
    {path:'login',element:<Login/>},
    {path:'home',element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:'*',element:<Notfound/>}
    
   
  ]}
 ])

function App() {


  return <>

<AuthProvider>
  
<RouterProvider router={router} />
<Toaster/>
</AuthProvider>

  </>;
}

export default App;
