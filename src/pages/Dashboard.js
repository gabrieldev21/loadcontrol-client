import React from 'react'
import { useDispatch } from 'react-redux'

import { DefaultLayout } from 'components'
import { logout } from 'redux/modules/user'

const Dashboard = () => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <DefaultLayout>
      <p>Chegou no Dashboard , Parabéns!</p>
      <button onClick={handleLogout}> Logout </button>
    </DefaultLayout>
  )
}

export default Dashboard
