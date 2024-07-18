import { FilterQuery, ProjectionType, UpdateQuery } from "mongoose"
import { IItem } from "../../models/interfaces/item.interface"
import itemModel from "../models/item.model"


async function create(admin: IItem) {
    return itemModel.create(admin)
}

function read(filter: FilterQuery<IItem>) {
    return itemModel.find({ ...filter, isActive: true })
}

async function readOne(filter: FilterQuery<IItem>, projection?: ProjectionType<IItem>) {
    return itemModel.findOne({ ...filter, isActive: true }, projection)
}

async function update(id: string, date: UpdateQuery<IItem>) {
    return itemModel.findByIdAndUpdate(id, date, { new: true })
}

async function del(id: string) {
    return update(id, { isActive: false })
    // return itemModel.findByIdAndUpdate(id, { isActive: false }){}
}




export default { create, read, readOne, update, del }