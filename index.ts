import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import articleController from "./controllers/articleController";
import commentController from "./controllers/commentController";
import authorController from "./controllers/authorController";
import productController from "./controllers/productController";
import categoryController from "./controllers/categoryController";
import cartProductController from "./controllers/cartProductController";
import userController from "./controllers/userController";
import orderController from "./controllers/orderController";

mongoose.connect("mongodb+srv://mingdev77:maBrop1Vx5gCX3vk@cluster0.sbsvhqf.mongodb.net");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app: Express = express();

app.use(cors({
    origin: ['http://localhost:3006']
}));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});
app.use('/', articleController)
app.use('/', commentController)
app.use('/', authorController)
app.use('/', productController)
app.use('/', categoryController)
app.use('/', cartProductController)
app.use('/', userController)
app.use('/', orderController)

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});