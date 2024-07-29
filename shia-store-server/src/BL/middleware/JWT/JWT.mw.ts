import { NextFunction, Request, Response } from "express"
import JWT from "./JWT";



export async function JWTAuth(req: Request, res: Response, next: NextFunction) {
    try {
        // get form headers
        const authorization = req.headers.authorization as string;
        const token = authorization.split('Bearer ')[1]
        console.log(token);

        const user = JWT.verifyAccessToken(token)
        req.body.user = user
        next()
    } catch (error) {
        res.status(401).send('You are not authorized! Please login')
    }

}