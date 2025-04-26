import jwt from 'jsonwebtoken'
const generateToken  = async (id:number,role:string) => {
    const token =  jwt.sign({id,role},"secret",{expiresIn:'1d'})
}