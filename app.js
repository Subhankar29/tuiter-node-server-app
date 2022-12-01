import express from 'express'
import cors from 'cors'

import HelloController from "./src/controllers/hello-controller.js";
import UserController from "./src/controllers/users/users-controller.js";
import TuitController from "./src/controllers/tuits/tuit-controller.js";
import mongoose from "mongoose";
import * as Process from "process";

const app = express()

mongoose.connect(process.env.DB_CONNECTION_STRING || "mongodb+srv://subhankar29:Subhankar%4029@cluster0.ampmrox.mongodb.net/?retryWrites=true&w=majority" || 'mongodb://localhost:27017/tuiter');

app.use(express.json())
app.use(cors())

HelloController(app)
UserController(app)
TuitController(app)
app.listen(process.env.PORT || 4000)