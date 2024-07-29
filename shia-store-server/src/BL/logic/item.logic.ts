import { FilterQuery, ProjectionType, UpdateQuery } from "mongoose"
import itemController from "../../DL/controllers/item.controller"
import { IItem } from "../../models/interfaces/item.interface"



async function createItem(item: IItem) {
    return itemController.create(item);
}

async function getItem(filter: FilterQuery<IItem>, projection?: ProjectionType<IItem>) {
    return itemController.readOne(filter, projection);
}

async function getManyItems(filter: FilterQuery<IItem>) {
    return itemController.read(filter);
}


async function updateItem(id: string, data: UpdateQuery<IItem>) {
    delete data._id;
    delete data.createAt;
    delete data.updatedAt;
    return itemController.update(id, data);
}

async function deleteItem(id: string) {
    return itemController.del(id);
}



export default { createItem, getItem, getManyItems, updateItem, deleteItem }