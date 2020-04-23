import React from 'react'
import { useDispatch } from 'react-redux'

import { logout } from 'redux/modules/user'

const Dashboard = () => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <div>
      <p>Chegou no Dashboard FDP</p>
      <button onClick={handleLogout}> Logout </button>
    </div>
  )
}

export default Dashboard
