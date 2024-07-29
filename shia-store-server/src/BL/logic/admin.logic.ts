import bcrypt from "bcryptjs"
import JWT from "../middleware/JWT/JWT"
import adminController from "../../DL/controllers/admin.controller"
import { IAdmin } from "../../models/interfaces/admin.interface"
import { FilterQuery, ProjectionType } from "mongoose"


async function createAdmin(admin: Partial<IAdmin>) {
    admin.password = bcrypt.hashSync(admin.password, 6)
    const newAdmin = await adminController.create(admin)
    return newAdmin
}

// createAdmin({
//     username: "admin",
//     password: "123",
//     refreshToken: 0
// })

async function getAdmin(filter: FilterQuery<IAdmin>, projection?: ProjectionType<IAdmin>) {
    return adminController.readOne(filter, projection)
}

async function login(username: string, password: string) {
    if (!username || !password) throw { massage: "missing data" }
    const admin = await getAdmin({ username })
    if (!admin || !bcrypt.compareSync(password, admin.password)) throw { massage: "Unauthorized" }
    const refreshToken = JWT.createRefreshToken({ username: admin.username })
    const accessToken = JWT.createAccessToken({ username: admin.username })
    await adminController.update(admin._id, { refreshToken: refreshToken })
    return { refreshToken, accessToken };
}


export default { login };