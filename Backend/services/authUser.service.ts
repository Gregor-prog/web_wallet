import bcrypt from 'bcryptjs'
import dotenv from "dotenv"
dotenv.config()
import pool from '../db'
export const register = async (fullname:string,username:string,email:string,password:string) => {
    const userExistQuery = `SELECT * FROM users WHERE username = $1`
    const userExist = await pool.query(userExistQuery,[username])
    // console.log(userExist)
    if(userExist.rows.length > 0){
        // throw Object.assign(new Error('user already exist'), {statusCode:409})
        throw new Error("user already exist");
        
    }
    const hashPassword = await bcrypt.hash(password,10)
    const createUserQuery = `INSERT INTO users(fullname,username,email,password) VALUES ($1,$2,$3,$4)`
    const createUser = await pool.query(createUserQuery,[fullname,username,email,hashPassword])
    console.log(createUser)
    return createUser
}