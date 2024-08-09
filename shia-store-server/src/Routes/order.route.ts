import { Request, Response } from 'express';
import express from 'express';
import { JWTAuth } from '../BL/middleware/JWT/JWT.mw';;
import orderLogic from '../BL/logic/order.logic';

const router = express.Router()

//api/order

// get order
router.get('/',
    JWTAuth,
    async (req: Request, res: Response) => {
        try {
            const filter = req.query
            const order = await orderLogic.getOrder(filter)
            res.status(200).send(order)
        } catch (error) {
            res.status(400).send(error)
        }
    })

// get many orders
router.get('/many',
    JWTAuth,
    async (req: Request, res: Response) => {
        try {
            const filter = req.query
            const orders = await orderLogic.getManyOrders(filter)
            res.status(200).send(orders)
        } catch (error) {
            res.status(400).send(error)
        }
    })

// get deleted order
router.get('/',
    JWTAuth,
    async (req: Request, res: Response) => {
        try {
            const filter = req.query
            const order = await orderLogic.getDeletedOrder(filter)
            res.status(200).send(order)
        } catch (error) {
            res.status(400).send(error)
        }
    })

// get many deleted orders
router.get('/many',
    JWTAuth,
    async (req: Request, res: Response) => {
        try {
            const filter = req.query
            const orders = await orderLogic.getManyDeletedOrders(filter)
            res.status(200).send(orders)
        } catch (error) {
            res.status(400).send(error)
        }
    })

// create order
router.post('/',
    async (req: Request, res: Response) => {
        try {

            const { data } = req.body
            const newOrder = await orderLogic.createOrder(data);
            res.status(200).send(newOrder)
        } catch (error) {
            res.status(400).send(error)
        }
    })

// update order
router.put('/',
    JWTAuth,
    async (req: Request, res: Response) => {
        try {
            const { data } = req.body
            const { _id } = req.body
            const order = await orderLogic.updateOrder(_id as string, data);
            res.status(200).send(order)
        } catch (error) {
            res.status(400).send(error)
        }
    })

//delete order
router.delete('/',
    JWTAuth,
    async (req: Request, res: Response) => {
        try {
            const { id } = req.body
            const order = await orderLogic.deleteOrder(id as string);
            res.status(200).send(order)
        } catch (error) {
            res.status(400).send(error)
        }
    })

export default router