import { Link ,Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <div>
      <Link to="/">AddNote</Link>
      <Link to="/see">Note</Link>
      <Outlet/>
    </div>
  )
}

export default Layout
