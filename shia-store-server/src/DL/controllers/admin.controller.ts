import { FilterQuery, ProjectionType, UpdateQuery } from "mongoose"
import { IAdmin } from "../../models/interfaces/admin.interface"
import adminModel from "../models/admin.model"


async function create(admin: IAdmin) {
    return adminModel.create(admin)
}

function read(filter: FilterQuery<IAdmin>) {
    return adminModel.find({ ...filter, isActive: true })
}

async function readOne(filter: FilterQuery<IAdmin>, projection?: ProjectionType<IAdmin>) {
    return adminModel.findOne({ ...filter, isActive: true }, projection)
}

async function update(id: string, date: UpdateQuery<IAdmin>) {
    return adminModel.findByIdAndUpdate(id, date, { new: true })
}

async function del(id: string) {
    return update(id, { isActive: false })
    // return adminModel.findByIdAndUpdate(id, { isActive: false }){}
}




export default { create, read, readOne, update, del }