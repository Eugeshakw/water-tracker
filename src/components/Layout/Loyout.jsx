import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Header from "components/header/header"
const Layout = () => {

    return (
        <Suspense>
            <Header/>
            <Outlet/>
   
        </Suspense>
    )

}

export default Layout;