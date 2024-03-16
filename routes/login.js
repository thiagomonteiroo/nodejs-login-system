import express from "express"

import { getLogin } from "../controllers/getLoginController.js"
import { getRegister } from "../controllers/getRegisterController.js"
import { getHome } from "../controllers/getHomeController.js"
import { getHomeUsers } from "../controllers/getHomeUsersController.js"

import { postLogin } from "../controllers/postLoginController.js"
import { postRegister } from "../controllers/postRegisterController.js"

import { authLogin } from "../middlewares/middlewares.js"
import { getRegisterAuth } from "../middlewares/middlewares.js"

const router = express.Router()


router.get('/', getLogin)

router.get('/register', getRegister)

router.get('/home', authLogin(), getHome)

router.get('/home/users', authLogin(), getRegisterAuth([1]), getHomeUsers)


router.post('/login',  postLogin)

router.post('/register', postRegister)

export default router