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
      <p>Chegou no Dashboard , Parabéns! </p>
    </DefaultLayout>
  )
}

export default Dashboard
