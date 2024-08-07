import mongoose, { Mongoose } from "mongoose";
import { IOrder } from "../../models/interfaces/order.interface";


const orderSchema = new mongoose.Schema<IOrder>({
    customerInfo: {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
    },
    items: [
        {
            _id: { type: mongoose.SchemaTypes.ObjectId, ref: 'item', required: true },
            mkt: { type: String, required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        },
    ],
    orderDate: { type: Date, default: Date.now, required: true },
    status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        required: true,
    },
    totalAmount: { type: Number, required: true },
    shippingAddress: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
    },
    paymentMethod: {
        type: String,
        enum: ['credit_card', 'paypal', 'bank_transfer', 'cash_on_delivery'],
        required: true,
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'paid', 'failed', 'refunded'],
        required: true,
    },
});


const orderModel = mongoose.model('order', orderSchema)


export default orderModel;