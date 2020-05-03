import React from 'react'

import { Avatar } from 'components'
import logo from 'assets/images/logo.png'

export default {
  title: 'Avatar',
}

export const Default = () => {
  return <Avatar />
}

export const WithImage = () => {
  return <Avatar size={92} src={logo} />
}
