import mongoose from "mongoose";
import { IAdmin } from "../../models/interfaces/admin.interface";

const adminSchema = new mongoose.Schema<IAdmin>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    refreshToken: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true }
})



const adminModel = mongoose.model('admin', adminSchema)


export default adminModel;