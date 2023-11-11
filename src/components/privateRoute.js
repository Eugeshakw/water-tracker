import { Navigate} from "react-router-dom";

// import { useSelector } from "react-redux";


export  function PrivateRoute ({component: Component, redirectTo='/'}) {

  

  

return  <Navigate to={redirectTo}/> 

};