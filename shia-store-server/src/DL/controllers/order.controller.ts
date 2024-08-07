import { FilterQuery, ProjectionType, UpdateQuery } from "mongoose"
import orderModel from "../dbModels/order.dbModel"
import { IOrder } from "../../models/interfaces/order.interface"


async function create(item: IOrder) {
    return orderModel.create(item)
}

async function read(filter: FilterQuery<IOrder>) {
    return orderModel.find({ ...filter })
}

async function readOne(filter: FilterQuery<IOrder>, projection?: ProjectionType<IOrder>) {
    return orderModel.findOne({
        ...filter
        // , isActive: true
    }
        ,
        projection)
}

async function update(id: string, data: UpdateQuery<IOrder>) {
    return orderModel.findOneAndUpdate({ _id: id }, { ...data, updatedAt: new Date() }, { new: true })
}

async function del(id: string) {
    return orderModel.findByIdAndDelete(id)
}




export default { create, read, readOne, update, del }