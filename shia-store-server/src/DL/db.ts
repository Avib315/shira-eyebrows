import mongoose from "mongoose"

export const connectDB = async () => {
    if (mongoose.connections[0].readyState)
        return true
    try {
        await mongoose.connect(process.env.CONNECTION_STRING || 'mongodb+srv://admin:avi6453415@developent.t5jsevm.mongodb.net/shiraStoreDB?retryWrites=true&w=majority&appName=developent' )
        console.log("db is connected");
    } catch (error) {
        console.log(error);
    }

}
