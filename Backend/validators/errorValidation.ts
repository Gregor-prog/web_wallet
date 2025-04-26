import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
const errorValidate = (req:Request,res:Response,next:NextFunction) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).json({
            success:false,
            message:"invalid input",
            data:errors.array()
        })
    }
    next()
}
export default errorValidate