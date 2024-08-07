import mongoose, { Mongoose, Schema } from "mongoose";
import { IOrder } from "../../models/interfaces/order.interface";



const orderSchema = new mongoose.Schema<IOrder>({
    customerInfo: {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        customerId: { type: Number, required: true }, // Moved inside customerInfo
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
    orderId: { type: Number, required: true },
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


// Counter Schema
const counterSchema = new Schema({
    name: { type: String, required: true, unique: true },
    seq: { type: Number, default: 1001 },
});

const Counter = mongoose.model('Counter', counterSchema);

// Pre-save hook to increment customerId and orderId
orderSchema.pre<IOrder>('save', async function (next) {
    const customerCounter = await Counter.findOneAndUpdate(
        { name: 'customerId' },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    );

    const orderCounter = await Counter.findOneAndUpdate(
        { name: 'orderId' },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    );

    if (customerCounter) {
        this.customerInfo.customerId = customerCounter.seq;
    }

    if (orderCounter) {
        this.orderId = orderCounter.seq;
    }

    next();
});

const orderModel = mongoose.model('order', orderSchema)


export default orderModel;