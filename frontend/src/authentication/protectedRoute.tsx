import { Navigate } from "react-router-dom";
import { userUser } from "./userContext";

export function ProtectedRoute({children,allowedRoles} : any){
    const user = userUser()
    if(!user){
        return <Navigate to="/login" replace/>
    }
    if(!(allowedRoles==user.User.role)){
        console.log()
        return <h1>Unauthorized:You dont have access to this page</h1>
    }

    return children
}