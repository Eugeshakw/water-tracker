import { Navigate } from 'react-router-dom';




export const PublicRoute = ({component: Component, redirectTo='/'}) => {
   
    return  <Navigate to={redirectTo}/>
}