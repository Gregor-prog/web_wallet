import { createContext,useContext,useState } from "react";
import { UserContextType } from "../types/type";


    const userContext = createContext<UserContextType | null>(null)
export function UserProvider({children} : any){

    const [User,setUser] = useState({username:"",role:""})

    const  Login = async (userName:string,password:string) => {
        try {
            // const {username,password}
            const logUser = await fetch("http://localhost:4500/user/login",{
                method: "POST",
                headers:{
                    "content-Type":"application/json"
                },
                body: JSON.stringify({
                    username:userName,
                    password:password
                })
            })
            if(!logUser.ok){
                throw new Error('an error occured')
            }
            const response = await logUser.json()
            console.log(response)
            
        } catch (error) {
            if(error){
                console.log(error)
                alert(error)
            }
        }
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