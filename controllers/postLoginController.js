import { db } from "../model/db.js"

export const postLogin = (req, res, next) => {
    const query = 'SELECT COUNT(*) FROM usuarios WHERE usu_email = $1 AND usu_senha = $2'

    const values = [
        req.body.email,
        req.body.password
    ]

    db.query(query, values, (err, data) => {
        if (err) return res.json(err)

        data = JSON.stringify(data.rows)
        let result = (JSON.parse(data))[0].count

        if (result > 0) {
            req.session.email = values[0]
            return res.status(200).redirect('/home')
        } else {
            return res.status(400).redirect('/')
        }
    })
}