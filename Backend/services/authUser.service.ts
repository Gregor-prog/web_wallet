import bcrypt from 'bcryptjs'
import dotenv from "dotenv"
dotenv.config()
import { user } from '../types'
import pool from '../db'
import { generateToken } from '../utils/generateToken'
export const register = async (fullname:string,username:string,email:string,password:string) => {
    const createTableQuery = `CREATE TABLE IF NOT EXIST users(
    user_id SERIAL PRIMARY KEY NOT NULL,
    fullname VARCHAR(255),
    username VARCHAR(255) UNIQUE,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255)
    )`
    const createTable = await pool.query(createTableQuery)
    const userExistQuery = `SELECT * FROM users WHERE username = $1`
    const userExist = await pool.query(userExistQuery,[username])
    // console.log(userExist)
    if(userExist.rows.length > 0){
        throw Object.assign(new Error('user already exist'), {statusCode:409})
        // throw new Error("user already exist");
        
    }
    const hashPassword = await bcrypt.hash(password,10)
    const createUserQuery = `INSERT INTO users(fullname,username,email,password) VALUES ($1,$2,$3,$4)`
    const createUser = await pool.query(createUserQuery,[fullname,username,email,hashPassword])
    console.log(createUser)
    return createUser
}

export const login = async (username:string,password:string) => {
    const checkUserQuery = `SELECT * FROM users WHERE username = $1`
    const checkUser = await pool.query(checkUserQuery,[username])
    // const {username,password} = checkUser
    if(checkUser.rows.length <= 0 ){
        throw Object.assign(new Error("user doesn't exist"),{statusCode:404})
    }
    const checkPassword = bcrypt.compare(password,checkUser.rows[0].password)
    if(!checkPassword){
        throw Object.assign(new Error("incorrect password"),{statusCode:401})
    }
    const token = generateToken(checkUser.rows[0].user_id,"user")
    return {
        user_id:checkUser.rows[0].password,
        fullname:checkUser.rows[0].fullname,
        username:checkUser.rows[0].username,
        email:checkUser.rows[0].email,
        token:token
    }
    
}