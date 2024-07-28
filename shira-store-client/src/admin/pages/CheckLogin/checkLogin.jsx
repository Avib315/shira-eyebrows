import Login from '../Login/login'
import Admin from '../Admin/admin'
import { Outlet } from 'react-router-dom'
import { UseUserInfo } from "../../store/UseUserInfo.jsx"
export default function CheckLogin() {
  const user = UseUserInfo(state => state.user)
  const loading = UseUserInfo(state => state.loading)
  const refreshToken = UseUserInfo(state => state.refreshToken)
  return (
    <>
      {loading ? <Loading /> :
        user ? <Admin> <Outlet/> </Admin>: <Login />}
    </>
  )
}
