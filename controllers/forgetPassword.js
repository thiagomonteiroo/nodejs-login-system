import { db } from "../model/db.js"
import { hash } from 'bcrypt'
import 'dotenv/config'

export const getForgetPassword =  (req, res) => {
    return res.status(200).render('../views/forgetPassword.ejs')
}

export const putPassword = async (req, res) => {
    const querySelect = 'SELECT usu_email FROM usuarios WHERE usu_email = $2 AND usu_nome = $1'
    const queryUpdate = 'UPDATE usuarios SET usu_senha = $3 WHERE usu_email = $2 AND usu_nome = $1'

    let password = req.body.newPassword
    let salt = parseInt(process.env.HASH, 10)
    password = await hash(password, salt)

    const values = [
        req.body.name,
        req.body.email
    ]

    const values2 = [
        req.body.name,
        req.body.email,
        password
    ]

    db.query(querySelect, values, (err, data) => {
        data = JSON.stringify(data.rows)

        if(data.length > 2) {
            db.query(queryUpdate, values2, (err) => {
                if (err) return res.json(err)
                return res.redirect(303, '<script>window.location="/";</script>')
            })
        } else {
            return res.status(400).send('Dados incorretos')
        }
    })
}
