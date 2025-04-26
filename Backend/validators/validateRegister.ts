import { Request, Response } from "express";
import { body } from "express-validator";

export const validateUser = [ 
    body('fullname').isString().notEmpty().withMessage("provide fullname"),
    body('email').isEmail().withMessage('provide a valid email'),
    body('username').isString().notEmpty().withMessage('provide fullname'),
    body('password').isLength({min:6}).notEmpty().withMessage('password is too short')
]