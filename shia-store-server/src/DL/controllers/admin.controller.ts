import { FilterQuery, ProjectionType, UpdateQuery } from "mongoose"
import { IAdmin } from "../../models/interfaces/admin.interface"
import adminModel from "../dbModels/admin.dbModel"


async function create(admin: Partial<IAdmin>) {
    return adminModel.create(admin)
}

async function read(filter: FilterQuery<IAdmin>) {
    return adminModel.find({ ...filter, isActive: true })
}

async function readOne(filter: FilterQuery<IAdmin>, projection?: ProjectionType<IAdmin>) {
    return adminModel.findOne({ ...filter, isActive: true }, projection)
}

async function update(id: string, data: UpdateQuery<IAdmin>) {
    return adminModel.findOneAndUpdate({ _id: id, isActive: true }, { ...data, updatedAt: new Date() }, { new: true })
}

async function del(id: string) {
    return update(id, { isActive: false })
    // return adminModel.findByIdAndUpdate(id, { isActive: false }){}
}




export default { create, read, readOne, update, del }