import { db } from "../model/db.js"

export const getHome = (req, res) => {
    const email = req.session.email

    if (email == null) {
        res.redirect('/')
    } else {
        const query = 'SELECT usu_nome, usu_nivel_acesso FROM usuarios WHERE usu_email = $1'

        const values = [
            email
        ]

        db.query(query, values, (err, data) => {
            if (err) return res.json(err)

            data = JSON.stringify(data.rows)
            const name = (JSON.parse(data))[0].usu_nome
            const role = (JSON.parse(data))[0].usu_nivel_acesso

            req.session.name = name
            req.session.role = role

            return res.status(200).render('../views/home.ejs', { name, email, role })
        })
    }
}