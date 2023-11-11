import { Suspense } from "react"
import { Outlet } from "react-router-dom"

const Layout = () => {

    return (
        <Suspense>
            {/* <header/> */}
            <Outlet/>
   
        </Suspense>
    )

}

export default Layout;