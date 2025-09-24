import Cookies from "js-cookie"
import { useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { toast } from "sonner"
const Protectedroute = () => {

const isAuth = Cookies.get("loginData")
useEffect(()=>{
  if(!isAuth){
    toast.error(" login to access this page")
  }
},[isAuth]);

return isAuth? <Outlet/>:<Navigate to="/" replace/>
}

export default Protectedroute