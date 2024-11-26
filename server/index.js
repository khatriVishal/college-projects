import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import StudentRoutes from "./routes.js"
import 'dotenv/config'
// require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/STUDENT';

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: "*",
    credentials: true,
}));
app.use("/student", StudentRoutes)
mongoose.connect(`${MONGO_URI}`).then(() => {
    app.listen(PORT, () => {
        console.log(`SERVER IS RUNNING AT ${PORT}`)
    })
}).catch(err => console.log(err));