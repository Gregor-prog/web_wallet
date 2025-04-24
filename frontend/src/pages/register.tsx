import { useState } from "react"
export function Register(){
    const [fullname,setfullname] = useState("")
    const [username,setusername] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const [confirmpassword,setconfirmpassword] = useState("")
    // const data = [fullname,username,email,password,confirmpassword]
    !fullname?console.log("fullname is required"):null
    !username?console.log("username is required"):null
    !email?console.log("email is required"):null
    !password?console.log("password is required"):null
    !confirmpassword?console.log("confirmpassword is required"):null
    password != confirmpassword?console.log("password must eqaul confirm password"):null
        function registerUser(e:any){
                e.preventDefault()

                !fullname?console.log("fullname is required"):null
                !username?console.log("username is required"):null
                !email?console.log("email is required"):null
                !password?console.log("password is required"):null
                !confirmpassword?console.log("confirmpassword is required"):null
                password != confirmpassword?console.log("password must eqaul confirm password"):null
        }
    return <div className="flex flex-row items-center justify-evenly h-[100%] bg-[#979dac] ">
        <form action="" onSubmit={(e) => {registerUser(e)}} className="p-[40px] bg-[#33415c8c] flex flex-col items-center gap-2 rounded-2xl shadow-2xl w-[100%] sm:w-[65%] lg:w-[45%]">
            <p className="text-2xl font-semibold pb-2.5 text-white">Register</p>
            <div className="text-left w-[90%]">
                <label htmlFor="fullname" className=" font-medium pb-2.5 text-white">Enter Full name: </label> <br/>
                <input type="text" name="fullname" onChange={(e) => {setfullname(e.target.value)}} className="border-2 border-[#001233] rounded-xl w-[90%] my-1.5 h-[33px]" />
            </div>
            <div className="text-left w-[90%]">
                <label htmlFor="username" className=" font-medium pb-2.5 text-white">Enter Username: </label> <br/>
                <input type="text" name="username" onChange={(e) => {setusername(e.target.value)}} className="border-2 border-[#001233] rounded-xl w-[90%] my-1.5 h-[33px]"/>
            </div>
            <div className="text-left w-[90%]">
                <label htmlFor="email" className=" font-medium pb-2.5 text-white">Enter Email: </label><br/>
                <input type="email" name="email" onChange={(e) => {setemail(e.target.value)}} className="border-2 border-[#001233] rounded-xl w-[90%] my-1.5 h-[33px]"/>
            </div>
            <div className="text-left w-[90%]">
                <label htmlFor="password" className=" font-medium pb-2.5 text-white">Enter Password:</label><br/>
                <input type="password" name="password" onChange={(e) => {setpassword(e.target.value)}}className="border-2 border-[#001233] rounded-xl w-[90%] my-1.5 h-[33px]" />
            </div>
            <div className="text-left w-[90%]">
                <label htmlFor="confirmPassword" className=" font-medium pb-2.5 text-white">Confirm Password: </label><br/>
                <input type="password" name="confirmPassword" onChange={(e) => {setconfirmpassword(e.target.value)}} className="border-2 border-[#001233] rounded-xl w-[90%] my-1.5 h-[33px]"/>
            </div>
            <button type="submit" className="bg-[#001845] p-2 rounded-2xl w-[50%] text-white font-bold">Register</button>
        </form>
    </div>
}