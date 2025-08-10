import app from '../config/express.js';
import ConnectToMongoDb from '../database/mongodb.js';
import { PORT } from '../config/env.config.js';

export const startServer = async () => {
    try {
        // Connect to MongoDB
        console.log('Connecting to MongoDB...');
        await ConnectToMongoDb();

        // Start the Express server
        console.log('Starting the server...');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log('There was an error starting the server:', error.message);
        process.exit(1);
    }
}

startServer();