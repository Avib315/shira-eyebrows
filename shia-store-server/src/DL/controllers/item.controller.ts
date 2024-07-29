import { FilterQuery, ProjectionType, UpdateQuery } from "mongoose"
import { IItem } from "../../models/interfaces/item.interface"
import itemModel from "../dbModels/item.dbModel"


async function create(admin: IItem) {
    return itemModel.create(admin)
}

async function read(filter: FilterQuery<IItem>) {
    return itemModel.find({ ...filter, isActive: true })
}

async function readOne(filter: FilterQuery<IItem>, projection?: ProjectionType<IItem>) {
    return itemModel.findOne({ ...filter, isActive: true }, projection)
}

async function update(id: string, data: UpdateQuery<IItem>) {
    return itemModel.findOneAndUpdate({ _id: id, isActive: true }, { ...data, updatedAt: new Date() }, { new: true })
}

async function del(id: string) {
    return update(id, { isActive: false })
}




export default { create, read, readOne, update, del }