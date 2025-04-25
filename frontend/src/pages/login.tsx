export function Login(){
    const formInput = [
        {label:"UserName",input:"text",name:"username"},
        {label:"password",input:"password",name:"password"}
    ]
    function login(e:any){
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const userName = formData.get("username")
        const password  = formData.get("password")
        console.log(userName)
        console.log(password)
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
            <button type="submit" className="bg-[#001845] p-2 rounded-2xl w-[50%] text-white font-bold">Login</button>
        </form>
    </div>
}