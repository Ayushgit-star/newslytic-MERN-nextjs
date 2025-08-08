import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import storeContext from '../context/storeContext'

const ProtectRole = ({role}) => {
//   const userInfo = {
//         name: "ayu",
//         role: "writer"
//     }

    const {store} = useContext(storeContext);

    if(store.userInfo?.role === role){
        return <Outlet/>
        // <Outlet /> is replaced by the component(<AdminIndex />) for the current nested route.
    }else{
        return <Navigate to='/dashboard/welcome'/>
    }
}

export default ProtectRole