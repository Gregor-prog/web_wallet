import { Request, Response } from "express";
import {register} from "../services/authUser.service";

export const registerUser =async (req:Request,res:Response) => {
    try {
    const {fullname,username,email,password} = req.body
    const registerUser = await register(fullname,username,email,password)
    res.status(200).json({
        success:true,
        message:"registered successfully",
        data:registerUser.rows
    })
    } catch (error) {
        // console.log(error)
        if(error instanceof Error){
            console.log(error)
            res.status(500).json({
                success:false,
                message:"an error occured",
                data:error.message
            })
        }
    }
}
