import React from 'react'
import AdminDashboard from '../AdminDashboard/AdminDashboard'
import { Outlet } from 'react-router-dom'

const AdminMainDashboard = () => {
  return (
    <div>
      {/* <AdminDashboard></AdminDashboard> */}
      <Outlet></Outlet>
    </div>
  )
}

export default AdminMainDashboard
