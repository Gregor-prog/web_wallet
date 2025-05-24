import { createContext,useContext,useState } from "react";
import { UserContextType } from "../types/type";


    const userContext = createContext<UserContextType | null>(null)
export function UserProvider({children} : any){

    const [User,setUser] = useState({username:"john doe",role:"admin"})

    const Login = () => {
        // login
    }
    const Logout = () => {
        //logout
    }

    return (
        <userContext.Provider value={{User,setUser,Login,Logout}}>
                {children}
        </userContext.Provider>
    )
}

export const userUser = () => useContext(userContext)