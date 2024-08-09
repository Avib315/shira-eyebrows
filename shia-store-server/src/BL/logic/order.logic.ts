import { FilterQuery, ProjectionType, UpdateQuery } from "mongoose"
import { IOrder } from "../../models/interfaces/order.interface"
import orderController from "../../DL/controllers/order.controller";


async function createOrder(order: any) {
    return orderController.create(order);
}

const orders = [
    {
        "customerInfo": {
            "fullName": "Emma Wilson",
            "email": "emma.wilson@example.com",
            "phone": "555-123-4567"
        },
        "items": [
            {
                "_id": "64bdefd5f1c3b1c4dcd7c5f1",
                "mkt": "Website",
                "quantity": 1,
                "price": 50.00
            }
        ],
        "orderDate": "2024-08-08T08:00:00Z",
        "status": "pending",
        "totalAmount": 50.00,
        "shippingAddress": {
            "street": "123 Beauty Lane",
            "city": "Glamour City",
            "state": "NY",
            "postalCode": "10001",
            "country": "USA"
        },
        "paymentMethod": "credit_card",
        "paymentStatus": "pending"
    },
    {
        "customerInfo": {
            "fullName": "Liam Brown",
            "email": "liam.brown@example.com",
            "phone": "555-987-6543"
        },
        "items": [
            {
                "_id": "64bdefd5f1c3b1c4dcd7c5f2",
                "mkt": "Website",
                "quantity": 1,
                "price": 60.00
            }
        ],
        "orderDate": "2024-08-07T12:00:00Z",
        "status": "processing",
        "totalAmount": 60.00,
        "shippingAddress": {
            "street": "456 Style St",
            "city": "Chic Town",
            "state": "CA",
            "postalCode": "90210",
            "country": "USA"
        },
        "paymentMethod": "paypal",
        "paymentStatus": "paid"
    },
    {
        "customerInfo": {
            "fullName": "Olivia Davis",
            "email": "olivia.davis@example.com",
            "phone": "555-555-5555"
        },
        "items": [
            {
                "_id": "64bdefd5f1c3b1c4dcd7c5f3",
                "mkt": "Website",
                "quantity": 1,
                "price": 55.00
            }
        ],
        "orderDate": "2024-08-06T16:00:00Z",
        "status": "shipped",
        "totalAmount": 55.00,
        "shippingAddress": {
            "street": "789 Trend Ave",
            "city": "Fashion City",
            "state": "IL",
            "postalCode": "60606",
            "country": "USA"
        },
        "paymentMethod": "bank_transfer",
        "paymentStatus": "paid"
    },
    {
        "customerInfo": {
            "fullName": "Noah Martinez",
            "email": "noah.martinez@example.com",
            "phone": "555-444-4444"
        },
        "items": [
            {
                "_id": "64bdefd5f1c3b1c4dcd7c5f4",
                "mkt": "Website",
                "quantity": 1,
                "price": 65.00
            }
        ],
        "orderDate": "2024-08-05T09:00:00Z",
        "status": "delivered",
        "totalAmount": 65.00,
        "shippingAddress": {
            "street": "321 Glam Rd",
            "city": "Beauty Ville",
            "state": "TX",
            "postalCode": "73301",
            "country": "USA"
        },
        "paymentMethod": "cash_on_delivery",
        "paymentStatus": "paid"
    },
    {
        "customerInfo": {
            "fullName": "Sophia Rodriguez",
            "email": "sophia.rodriguez@example.com",
            "phone": "555-333-3333"
        },
        "items": [
            {
                "_id": "64bdefd5f1c3b1c4dcd7c5f5",
                "mkt": "Website",
                "quantity": 1,
                "price": 70.00
            }
        ],
        "orderDate": "2024-08-04T10:00:00Z",
        "status": "cancelled",
        "totalAmount": 70.00,
        "shippingAddress": {
            "street": "654 Vogue St",
            "city": "Elegance City",
            "state": "KS",
            "postalCode": "66604",
            "country": "USA"
        },
        "paymentMethod": "credit_card",
        "paymentStatus": "refunded"
    }
]


// orders.forEach(order => {
//     createOrder(order)
// })


async function getOrder(filter: FilterQuery<IOrder>, projection?: ProjectionType<IOrder>) {
    return orderController.readOne({ ...filter, isActive: true }, projection);
}

async function getManyOrders(filter: FilterQuery<IOrder>) {
    const orders = await orderController.read({ ...filter, isActive: true });
    return orders
}

async function getDeletedOrder(filter: FilterQuery<IOrder>, projection?: ProjectionType<IOrder>) {
    return orderController.readOne({ ...filter, isActive: false }, projection);
}

async function getManyDeletedOrders(filter: FilterQuery<IOrder>) {
    const orders = await orderController.read({ ...filter, isActive: false });
    return orders
}



async function updateOrder(id: string, data: UpdateQuery<IOrder>) {
    delete data._id;
    delete data.createAt;
    delete data.updatedAt;
    data.images = JSON.parse(String(data.images))
    data.isActive = Boolean(data.isActive)
    return orderController.update(id, data);
}

async function deleteOrder(id: string) {
    return orderController.del(id);
}



export default { createOrder, getOrder, getManyOrders, updateOrder, deleteOrder, getDeletedOrder, getManyDeletedOrders }