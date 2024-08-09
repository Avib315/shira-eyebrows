import { FilterQuery, ProjectionType, UpdateQuery } from "mongoose"
import { IItem } from "../../models/interfaces/item.interface"
import itemModel from "../dbModels/item.dbModel"


async function create(item: IItem) {
    return itemModel.create(item)
}

async function read(filter: FilterQuery<IItem>) {
    return itemModel.find(filter)
}

async function readOne(filter: FilterQuery<IItem>, projection?: ProjectionType<IItem>) {
    return itemModel.findOne(filter, projection)
}

async function update(id: string, data: UpdateQuery<IItem>) {
    return itemModel.findOneAndUpdate({ _id: id }, { ...data, updatedAt: new Date() }, { new: true })
}

async function del(id: string) {
    return update(id, { isActive: false })
}




export default { create, read, readOne, update, del }