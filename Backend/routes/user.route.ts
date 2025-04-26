import express from "express"
import { validateUser } from "../validators/validateRegister"
import errorValidate from "../validators/errorValidation"
import { registerUser } from "../controller/authUser.controller"

const userRouter = express.Router()

userRouter.post('/register',validateUser,errorValidate,registerUser)


export default userRouter