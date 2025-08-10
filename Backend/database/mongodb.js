import { mongoDB } from "../config/env.config.js";
import mongoose from 'mongoose';
const ConnectToMongoDb = async () => {
    try {
        //mongodb connection string
        const conn = await mongoose.connect(mongoDB.mongoURI)
        console.log('mongoDB instance connected successfully', conn.connection.host)
    } catch (error) {
        console.error('Error connecting to mongoDB:', error.message, error.stack);
        process.exit(1);
        // Exit the process with failure
    }
}

export default ConnectToMongoDb; 