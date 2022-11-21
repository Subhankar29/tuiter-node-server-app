import express from 'express'
import cors from 'cors'

import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitController from "./controllers/tuits/tuit-controller.js";

const app = express()

app.use(express.json())
app.use(cors())

HelloController(app)
UserController(app)
TuitController(app)


app.listen(process.env.PORT || 4000)