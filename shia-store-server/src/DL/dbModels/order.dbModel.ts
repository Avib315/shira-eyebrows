import mongoose, { Mongoose } from "mongoose";
import IOrder from "../../models/interfaces/order.interface";

const itemSchema = new mongoose.Schema<IOrder>({
    items: [{ _id: { type: mongoose.SchemaTypes.ObjectId, ref: 'item', }, mkt: String, quantity:Number , price: Number}],
    orderDate:{ type: Date, default: Date.now },
    
})



const itemModel = mongoose.model('item', itemSchema)


export default itemModel;