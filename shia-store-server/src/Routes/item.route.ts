import { Request, Response } from 'express';
import express from 'express';
import { JWTAuth } from '../BL/middleware/JWT/JWT.mw';
import itemLogic from '../BL/logic/item.logic';

const router = express.Router()

//api/item

// get item
router.get('/', async (req: Request, res: Response) => {
    try {
        const filter = req.query
        const item = await itemLogic.getItem(filter)
        res.status(200).send(item)
    } catch (error) {
        res.status(400).send(error)
    }
})

// get many items
router.get('/many', async (req: Request, res: Response) => {
    try {
        
        const filter = req.query
        const items = await itemLogic.getManyItems(filter)
       
        res.status(200).send(items)
    } catch (error) {
        res.status(400).send(error)
    }
})

// get item deleted
router.get('/deleted',
    JWTAuth,
    async (req: Request, res: Response) => {
        try {
            const filter = req.query
            const item = await itemLogic.getDeletedItem(filter)
            res.status(200).send(item)
        } catch (error) {
            res.status(400).send(error)
        }
    })

// get many deleted items
router.get('/many/deleted',
    JWTAuth,
    async (req: Request, res: Response) => {
        try {
            const filter = req.query
            const items = await itemLogic.getManyDeletedItems(filter)
            res.status(200).send(items)
        } catch (error) {
            res.status(400).send(error)
        }
    })

// create item
router.post('/',
    JWTAuth,
    async (req: Request, res: Response) => {
        try {

            const { data } = req.body
            const newItem = await itemLogic.createItem(data);
            res.status(200).send(newItem)
        } catch (error) {
            res.status(400).send(error)
        }
    })

// update item
router.put('/',
    //  JWTAuth,
    async (req: Request, res: Response) => {
        try {
            const { data } = req.body
            const { _id } = req.body
            const item = await itemLogic.updateItem(_id as string, data);
            res.status(200).send(item)
        } catch (error) {
            res.status(400).send(error)
        }
    })

//delete item
router.delete('/',
    JWTAuth,
    async (req: Request, res: Response) => {
        try {
            const { id } = req.body
            const item = await itemLogic.deleteItem(id as string);
            res.status(200).send(item)
        } catch (error) {
            res.status(400).send(error)
        }
    })

export default router