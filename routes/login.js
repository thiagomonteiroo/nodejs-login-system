import express from "express"
import { getLogin, getRegister, postLogin, postRegister, getHome } from '../controllers/loginController.js'

const router = express.Router()

router.get('/', getLogin)

router.post('/login', postLogin)

router.get('/register', getRegister)

router.post('/register', postRegister)

router.get('/home', getHome)

export default router