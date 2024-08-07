import { FilterQuery, ProjectionType, UpdateQuery } from "mongoose"
import { IOrder } from "../../models/interfaces/order.interface"
import orderController from "../../DL/controllers/order.controller";


async function createOrder(order: IOrder) {
    return orderController.create(order);
}

async function getOrder(filter: FilterQuery<IOrder>, projection?: ProjectionType<IOrder>) {
    return orderController.readOne(filter, projection);
}

async function getManyOrders(filter: FilterQuery<IOrder>) {
    const orders = await orderController.read(filter);
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



export default { createOrder, getOrder, getManyOrders, updateOrder, deleteOrder }