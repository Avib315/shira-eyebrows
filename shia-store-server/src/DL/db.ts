import mongoose from "mongoose"

export const connectDB = async () => {
    if (mongoose.connections[0].readyState)
        return true
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("db is connected");
    } catch (error) {
        console.log(error);
    }

}
