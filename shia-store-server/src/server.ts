import { Express, Request, Response } from 'express';
import express from 'express';
import cors from "cors"
import dotenv from "dotenv"
import helmet from 'helmet';


dotenv.config()

const
    app: Express = express(),
    PORT: string = process.env.PORT || '3100';

require("./db")
app.use(cors())
app.use(helmet());



app.get('/', async (req: Request, res: Response) => {
    res.send("success!!!!!!!!!!!!!")
})