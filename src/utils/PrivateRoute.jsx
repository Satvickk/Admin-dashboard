import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoute() {
    const token = localStorage.getItem('token')
  return (
        !token ? <Navigate to="/"/> : <Outlet />
  )
}

export default PrivateRoute
