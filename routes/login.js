import express from "express"

import { getLogin } from "../controllers/login.js"
import { getRegister } from "../controllers/register.js"
import { getHome } from "../controllers/home.js"
import { getHomeUsers } from "../controllers/usersList.js"
import { getEdit } from "../controllers/edit.js"

import { postLogin } from "../controllers/login.js"
import { postRegister } from "../controllers/register.js"

import { putEdit } from "../controllers/edit.js"

import { deleteUser } from "../controllers/delete.js"

import { authLogin } from "../middlewares/middlewares.js"
import { getRegisterAuth } from "../middlewares/middlewares.js"

const router = express.Router()


router.get('/', getLogin)

router.get('/register', getRegister)

router.get('/home', authLogin(), getHome)

router.get('/home/users', authLogin(), getRegisterAuth([1]), getHomeUsers)

router.get('/home/edit', authLogin(), getEdit)


router.post('/login',  postLogin)

router.post('/register', postRegister)


router.put('/home/users/:id', putEdit)


router.delete('/home/users/:id', deleteUser)

export default router