import { db } from "../model/db.js"
import { hash } from 'bcrypt'
import 'dotenv/config'

export const postRegister =  async (req, res) => {
    const query = 'INSERT INTO usuarios (usu_nome, usu_email, usu_senha, usu_nivel_acesso) VALUES ($1, $2, $3, $4)'
    
    let password = req.body.password
    let salt = parseInt(process.env.HASH, 10)
    password = await hash(password, salt)

    const values = [
        req.body.name,
        req.body.email,
        password,
        req.body.role
    ]

    db.query(query, values, (err) => {
        if (err) return res.json(err)

        return res.status(200).redirect('/')
    })
}