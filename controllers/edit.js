import { db } from "../model/db.js"
import 'dotenv/config'

export const getEdit =  (req, res) => {
    const id = req.query.id
    const name = req.query.name
    const email = req.query.email

    return res.status(200).render('../views/edit.ejs', {id, name, email})
}

export const putEdit = (req, res) => {
    const query = 'UPDATE usuarios SET usu_nome = $2, usu_email = $3 WHERE usu_id = $1'

    const values = [
        req.params.id,
        req.body.name,
        req.body.email
    ]

    db.query(query, values, (err) => {
        if (err) return res.json(err)

        return res.status(303).redirect(303, '/home/users')
    })

}
