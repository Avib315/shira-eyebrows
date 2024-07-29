import mongoose from "mongoose";
import { IItem } from "../../models/interfaces/item.interface";

const itemSchema = new mongoose.Schema<IItem>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    images: [{ alt: String, src: { type: String, required: true } }],
    ingredients: { type: [String], required: true },
    colorSet: { type: [String], required: true },
    inStock: { type: Number, required: true },
    tag: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
})



const itemModel = mongoose.model('item', itemSchema)


export default itemModel;