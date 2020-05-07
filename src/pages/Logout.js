import { useDispatch } from 'react-redux'
import { logout } from 'redux/modules/user'

const Logout = () => {
  const dispatch = useDispatch()
  dispatch(logout())
  return null
}

export default Logout
