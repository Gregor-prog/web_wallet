import { Link, replace } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { userUser } from "../authentication/userContext";
import { useState } from "react";
export function Login(){
    const [redirect,setredirect] = useState(false)
    const user = userUser()
    const formInput = [
        {label:"UserName",input:"text",name:"username"},
        {label:"password",input:"password",name:"password"}
    ]
   async function login(e:any){
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const userName = formData.get("username")
        const password  = formData.get("password")
        
        try {
            const login = await fetch("http://localhost:4500/user/login",{
                method: "POST",
                headers:{
                    "content-Type":"application/json"
                },
                body: JSON.stringify({
                    username:userName,
                    password:password
                })
            })
            const response = await login.json()
            if(login.ok){
                user?.setUser({username:'john doe',role:'admin'})
                alert("login success")
                setredirect(true)
            }
            if(!login.ok){
                console.log(response)
                throw new Error(response.data)
            }
        } catch (error) {
            if(error instanceof Error){
                // const [a] = error
                console.log(error.message)
                alert(error.message)
            }
        }
    }
    if(redirect){
                return <Navigate to='/Dashboard' replace/>
    }
    return <div className="flex flex-row items-center justify-evenly h-[100%] bg-[#979dac]">
        
        <form onSubmit={(e) => login(e)} className="p-[40px] bg-[#33415c8c] flex flex-col items-center gap-2 rounded-2xl shadow-2xl w-[100%] sm:w-[65%] lg:w-[45%]">
            <p className="text-2xl font-semibold pb-2.5 text-white">Login</p>
            {formInput.map((input) => (
                <div className="text-left w-[90%]">
                    <label htmlFor={input.name} className=" font-medium pb-2.5 text-white">{input.label}</label><br/>
                    <input type={input.input} name={input.name} className="border-2 border-[#001233] rounded-xl w-[90%] my-1.5 h-[33px]"/>
                </div>
            ))}
            <Link to='/' className="text-right w-[70%] text-[#001233]">Register</Link>
            <button type="submit" className="bg-[#001845] p-2 rounded-2xl w-[50%] text-white font-bold">Login</button>
        </form>
    </div>
}