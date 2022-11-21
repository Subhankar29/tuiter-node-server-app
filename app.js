import express from 'express'
import cors from 'cors'

import HelloController from "./src/controllers/hello-controller.js";
import UserController from "./src/controllers/users/users-controller.js";
import TuitController from "./src/controllers/tuits/tuit-controller.js";

const app = express()

app.use(express.json())
app.use(cors())

HelloController(app)
UserController(app)
TuitController(app)


app.listen(process.env.PORT || 4000)