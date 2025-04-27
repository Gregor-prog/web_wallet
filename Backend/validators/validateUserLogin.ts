import { body } from "express-validator"
export const valUserLogin = [
    body('username').isString().notEmpty().withMessage("username is invalid"),
    body('password').isLength({min:6}).withMessage("password should be longer")
]