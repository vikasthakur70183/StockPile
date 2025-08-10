import dotenv from 'dotenv';
dotenv.config({ path: '.env.development.local' })

const mongoDB = {
    mongoURI: process.env.MONGO_URI,
}
const PORT = process.env.PORT
export { mongoDB, PORT };