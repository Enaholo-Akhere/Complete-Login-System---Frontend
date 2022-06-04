import { Navigate, Outlet } from "react-router-dom"


const useAuth = () => {
    const isSignIn = JSON.parse(window.localStorage.getItem('user'))
    return isSignIn && Object.keys(isSignIn).length > 0
}
const RedirectTo = () => {
    const auth = useAuth()
  return !auth ? <Outlet /> : <Navigate to='/dashboard' />
}

export default RedirectTo