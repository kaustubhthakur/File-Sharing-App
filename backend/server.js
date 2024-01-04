const express = require('express')
const mongoose = require('mongoose')
const app = express();
const port = 9090;
const cors = require("cors")
const imageRouter = require('./route/files')
require('dotenv').config();
const connection = async(req,res) => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`database is connected`)
    } catch (error) {
        console.log(error);
    }
}
connection();
app.use(cors());
app.use('/',imageRouter);
app.use(express.json());
app.listen(port,() => {
    console.log(`server is running on port ${port}...`)
})