export interface IAdmin {
    _id: string
    username: string
    password: string
    createAt: Date;
    updatedAt: Date;
    isActive: boolean;
}