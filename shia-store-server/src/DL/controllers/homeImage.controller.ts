import { FilterQuery, ProjectionType, UpdateQuery } from "mongoose"
import { IHomeImage } from "../../models/interfaces/homeImage.interface"
import homeImageModel from "../dbModels/homeImage.dbModel"


async function create(admin: IHomeImage) {
    return homeImageModel.create(admin)
}

async function read(filter: FilterQuery<IHomeImage>) {
    return homeImageModel.find({ ...filter, isActive: true })
}

async function readOne(filter: FilterQuery<IHomeImage>, projection?: ProjectionType<IHomeImage>) {
    return homeImageModel.findOne({ ...filter, isActive: true }, projection)
}

async function update(id: string, data: UpdateQuery<IHomeImage>) {
    return homeImageModel.findOneAndUpdate({ _id: id, isActive: true }, { ...data, updatedAt: new Date() }, { new: true })
}

async function del(id: string) {
    return update(id, { isActive: false })
    // return homeImageDbModel.findByIdAndUpdate(id, { isActive: false }){}
}




export default { create, read, readOne, update, del }