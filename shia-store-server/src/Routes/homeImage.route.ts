import { Request, Response } from 'express';
import express from 'express';
import { JWTAuth } from '../BL/middleware/JWT/JWT.mw';
import homeImageLogic from '../BL/logic/homeImage.logic';

const router = express.Router()

//api/homeImage

// get image
router.get('/', async (req: Request, res: Response) => {
    try {
        const filter = req.query
        const homeImage = await homeImageLogic.getHomeImage(filter)
        res.status(200).send(homeImage)
    } catch (error) {
        res.status(400).send(error)
    }
})

// get many homeImages
router.get('/many', async (req: Request, res: Response) => {
    try {
        const filter = req.query
        const homeImages = await homeImageLogic.getManyHomeImages(filter)
        res.status(200).send(homeImages)
    } catch (error) {
        res.status(400).send(error)
    }
})

// create homeImage
router.post('/', JWTAuth, async (req: Request, res: Response) => {
    try {
        const { data } = req.body
        const newHomeImage = await homeImageLogic.createHomeImage(data);
        res.status(200).send(newHomeImage)
    } catch (error) {
        res.status(400).send(error)
    }
})

// update homeImage
router.put('/', JWTAuth, async (req: Request, res: Response) => {
    try {
        const { data } = req.body
        const { _id } = req.query
        const homeImage = await homeImageLogic.updateHomeImage(_id as string, data);
        res.status(200).send(homeImage)
    } catch (error) {
        res.status(400).send(error)
    }
})

//delete homeImage
router.delete('/', JWTAuth, async (req: Request, res: Response) => {
    try {
        const { _id } = req.query
        const homeImage = await homeImageLogic.deleteHomeImage(_id as string);
        res.status(200).send(homeImage)
    } catch (error) {
        res.status(400).send(error)
    }
})

export default router