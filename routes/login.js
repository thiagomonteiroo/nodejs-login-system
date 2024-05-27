import express from "express"

import { getLogin, postLogin } from "../controllers/login.js"
import { getRegister, postRegister } from "../controllers/register.js"
import { getForgetPassword ,putPassword } from "../controllers/forgetPassword.js"
import { getHome } from "../controllers/home.js"
import { getHomeUsers } from "../controllers/usersList.js"
import { getEdit, putEdit } from "../controllers/edit.js"
import { getBrand, postBrand } from "../controllers/brand.js" 
import { getProducts, getNewProduct, postProduct } from "../controllers/product.js"

import { deleteUser } from "../controllers/delete.js"

import { authLogin, getRegisterAuth } from "../middlewares/middlewares.js"

const router = express.Router()


router.get('/', getLogin)

router.get('/register', getRegister)

router.get('/forgetPassword', getForgetPassword)

router.get('/home', authLogin(), getHome)

router.get('/home/users', authLogin(), getRegisterAuth([1]), getHomeUsers)

router.get('/home/edit', authLogin(), getEdit)

router.get('/home/newBrand', getBrand)

router.get('/home/products', getProducts)

router.get('/home/newProduct', getNewProduct)


router.post('/login',  postLogin)

router.post('/register', postRegister)

router.post('/home/newBrand', authLogin(), getRegisterAuth([1]), postBrand)

router.post('/home/newProduct', postProduct)


router.put('/forgetPassword', putPassword)

router.put('/home/users/:id', putEdit)


router.delete('/home/users/:id', deleteUser)

export default router