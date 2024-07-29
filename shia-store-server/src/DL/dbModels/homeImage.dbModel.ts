import mongoose from "mongoose";
import { IHomeImage } from "../../models/interfaces/homeImage.interface";

const homeImageSchema = new mongoose.Schema<IHomeImage>({
    alt: String,
    src: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true }
})



const homeImageModel = mongoose.model('homeImage', homeImageSchema)


export default homeImageModel;