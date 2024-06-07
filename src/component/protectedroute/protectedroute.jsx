import React, { useContext } from "react";
import { authContext } from "../../context/authentication";
import { Navigate } from 'react-router-dom';


export default function ProtectedRoute( { children } ) {

    // const { token } = useContext( authContext );
    const token=localStorage.getItem('tkn')

    if(token === null ){
      
        return <Navigate to='/login' />
    }

    return <>

    {children}
    
    </>;
}

