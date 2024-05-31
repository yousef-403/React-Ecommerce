import { Outlet } from "react-router"
import MainNav from "../Component/MainNav/MainNav"

const Layout = () => {
  return (
    <div>
    <MainNav/>
    <Outlet/>
    </div>
  )
}

export default Layout