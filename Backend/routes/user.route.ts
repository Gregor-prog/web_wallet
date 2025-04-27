import express from "express"
import { validateUser } from "../validators/validateRegister"
import errorValidate from "../validators/errorValidation"
import { loginUser, registerUser } from "../controller/authUser.controller"
import { valUserLogin } from "../validators/validateUserLogin"

const userRouter = express.Router()

userRouter.post('/register',validateUser,errorValidate,registerUser)
userRouter.post('/login',valUserLogin,errorValidate,loginUser)


export default userRouter