import { Express, Request, Response } from 'express';
import express from 'express';
import cors from "cors"
import dotenv from "dotenv"
import helmet from 'helmet';
import { connectDB } from './DL/db';
import itemRoute from './Routes/item.route'
import homeImageRoute from './Routes/homeImage.route'
import adminRoute from './Routes/admin.route'


dotenv.config()

const
    app: Express = express(),
    PORT: string = process.env.PORT || '3220';

connectDB()
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(helmet());
app.use(express.json())

app.use('/api/item', itemRoute)
app.use('/api/homeImage', homeImageRoute)
app.use('/api/admin', adminRoute)




// app.get('/', async (req: Request, res: Response) => {
//     res.send(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Shira-Store Server</title>
//     <style>
//         body {
//             font-family: 'Arial', sans-serif;
//             background-color: #f0f0f0;
//             color: #333;
//             margin: 0;
//             padding: 0;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100vh;
//         }
//         .container {
//             text-align: center;
//             background-color: #ffffff;
//             padding: 20px;
//             border-radius: 10px;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         }
//         h1 {
//             color: #4CAF50;
//             font-size: 2.5em;
//             margin: 0;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <h1>Welcome to Shira-Store Server!</h1>
//     </div>
// </body>
// </html>`)
// })

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))