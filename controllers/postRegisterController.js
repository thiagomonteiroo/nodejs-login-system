import { db } from "../model/db.js"

export const postRegister = (req, res) => {
    const query = 'INSERT INTO usuarios (usu_nome, usu_email, usu_senha, usu_nivel_acesso) VALUES ($1, $2, $3, 1)'

    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]

    db.query(query, values, (err) => {
        if (err) return res.json(err)

        return res.status(200).redirect('/')
    })
}