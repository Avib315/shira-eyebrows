import { FilterQuery, ProjectionType, UpdateQuery } from "mongoose"
import { IHomeImage } from "../../models/interfaces/homeImage.interface";
import homeImageController from "../../DL/controllers/homeImage.controller";



async function createHomeImage(homeImage: IHomeImage) {
    return homeImageController.create(homeImage);
}

async function getHomeImage(filter: FilterQuery<IHomeImage>, projection?: ProjectionType<IHomeImage>) {
    return homeImageController.readOne({ ...filter, isActive: true }, projection);
}

async function getManyHomeImages(filter: FilterQuery<IHomeImage>) {
    return homeImageController.read({ ...filter, isActive: true });
}

async function getDeletedHomeImage(filter: FilterQuery<IHomeImage>, projection?: ProjectionType<IHomeImage>) {
    return homeImageController.readOne({ ...filter, isActive: false }, projection);
}

async function getManyDeletedHomeImages(filter: FilterQuery<IHomeImage>) {
    return homeImageController.read({ ...filter, isActive: false });
}


async function updateHomeImage(id: string, data: UpdateQuery<IHomeImage>) {
    delete data._id;
    delete data.createAt;
    delete data.updatedAt;
    return homeImageController.update(id, data);
}

async function deleteHomeImage(id: string) {
    return homeImageController.del(id);
}



export default { createHomeImage, getHomeImage, getManyHomeImages, updateHomeImage, deleteHomeImage, getDeletedHomeImage, getManyDeletedHomeImages }