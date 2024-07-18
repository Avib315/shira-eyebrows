import { Request, Response } from 'express';
import express from 'express';
import { JWTAuth } from '../BL/middleware/JWT/JWT.mw';

const router = express.Router()

//api/homeImage

// get image
router.get('/', async (req: Request, res: Response) => {
    try {
        res.status(200).send('Welcome')
    } catch (error) {
        res.status(400).send(error)
    }
})

// get many images
router.get('/many', async (req: Request, res: Response) => {
    try {
        res.status(200).send('Welcome')
    } catch (error) {
        res.status(400).send(error)
    }
})

// create image
router.post('/', JWTAuth, async (req: Request, res: Response) => {
    try {
        res.status(200).send('Welcome')
    } catch (error) {
        res.status(400).send(error)
    }
})

// update image
router.put('/', JWTAuth, async (req: Request, res: Response) => {
    try {
        res.status(200).send('Welcome')
    } catch (error) {
        res.status(400).send(error)
    }
})

//delete image
router.delete('/', JWTAuth, async (req: Request, res: Response) => {
    try {
        res.status(200).send('Welcome')
    } catch (error) {
        res.status(400).send(error)
    }
})

export default router