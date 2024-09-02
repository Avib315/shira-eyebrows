import { FilterQuery, ProjectionType, UpdateQuery } from "mongoose"
import itemController from "../../DL/controllers/item.controller"
import { IItem } from "../../models/interfaces/item.interface"
import cloudinaryService from "../cloudinary/cloudinaryService"


async function createItem(item: IItem) {
    const images = item.images
    if (String(item.images) != "[]")
        item.images = await cloudinaryService.uploadImage(String(images), "itemsImage")
    else
        item.images = []  // If no images provided, set it to an empty array.

    item.isActive = Boolean(item.isActive)
    return itemController.create(item);
}

async function getItem(filter: FilterQuery<IItem>, projection?: ProjectionType<IItem>) {
    return itemController.readOne({ ...filter, isActive: true }, projection);
}

async function getManyItems(filter: FilterQuery<IItem>) {
    console.log("________ HERE");
    const items = await itemController.read({ ...filter, isActive: true });
    console.log(items);
    return items
}

async function getDeletedItem(filter: FilterQuery<IItem>, projection?: ProjectionType<IItem>) {
    return itemController.readOne({ ...filter, isActive: false }, projection);
}

async function getManyDeletedItems(filter: FilterQuery<IItem>) {
    const items = await itemController.read({ ...filter, isActive: false });
    return items
}



async function updateItem(id: string, data: UpdateQuery<IItem>) {
    delete data._id;
    delete data.createAt;
    delete data.updatedAt;
    data.images = JSON.parse(String(data.images))
    data.isActive = Boolean(data.isActive)
    return itemController.update(id, data);
}

async function deleteItem(id: string) {
    return itemController.del(id);
}



export default { createItem, getItem, getManyItems, updateItem, deleteItem, getDeletedItem, getManyDeletedItems }