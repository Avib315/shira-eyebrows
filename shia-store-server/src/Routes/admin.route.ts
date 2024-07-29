import { Request, Response } from 'express';
import express from 'express';
import JWT from '../BL/middleware/JWT/JWT';
import { JwtPayload } from 'jsonwebtoken';
import adminLogic from '../BL/logic/admin.logic';

const router = express.Router()

//api/admin

// login admin
router.post('/login', async (req: Request, res: Response) => {
    try {
        const { body: { username, password } } = req
        const tokens = await adminLogic.login(username as string, password as string)
        res.status(200).send(tokens)
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