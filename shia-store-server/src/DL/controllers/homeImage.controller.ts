import { FilterQuery, ProjectionType, UpdateQuery } from "mongoose"
import { IHomeImage } from "../../models/interfaces/homeImage.interface"
import homeImage from "../models/homeImage.model"


async function create(admin: IHomeImage) {
    return homeImage.create(admin)
}

function read(filter: FilterQuery<IHomeImage>) {
    return homeImage.find({ ...filter, isActive: true })
}

async function readOne(filter: FilterQuery<IHomeImage>, projection?: ProjectionType<IHomeImage>) {
    return homeImage.findOne({ ...filter, isActive: true }, projection)
}

async function update(id: string, date: UpdateQuery<IHomeImage>) {
    return homeImage.findByIdAndUpdate(id, date, { new: true })
}

async function del(id: string) {
    return update(id, { isActive: false })
    // return homeImage.findByIdAndUpdate(id, { isActive: false }){}
}




export default { create, read, readOne, update, del }