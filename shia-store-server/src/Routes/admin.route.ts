import { Request, Response } from 'express';
import express from 'express';
import JWT from '../BL/middleware/JWT/JWT';
import { JwtPayload } from 'jsonwebtoken';

const router = express.Router()

//api/admin

// login admin
router.post('/login', async (req: Request, res: Response) => {
    try {
        res.status(200).send('Welcome')
    } catch (error) {
        res.status(400).send(error)
    }
})

//create new access token
router.post(`/token`, async (req: Request, res: Response) => {
    try {
        const manager = JWT.verifyRefreshToken(req.body.token) as JwtPayload
        const token = JWT.createAccessToken({ userName: manager.userName })
        res.status(200).send(token)
    } catch (error) {
        res.status(400).send(error)
    }
})

//reset password
router.post(`/resetPassword`, async (req: Request, res: Response) => {
    try {
        res.status(200).send('')
    } catch (error) {
        res.status(400).send(error)
    }
})


export default router