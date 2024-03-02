import { db } from "../model/db.js"

export const getLogin = (_, res) => {
    res.render('../views/login.ejs')
}

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
            res.redirect('/home')
        } else {
            res.redirect('/')
        }

    })


}

export const getRegister = (_, res) => {
    res.render('../views/register.ejs')
}

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

export const getHome = (req, res) => {
    const email = req.session.email

    if (email == null) {
        res.redirect('/')
    } else {
        const query = 'SELECT usu_nome FROM usuarios WHERE usu_email = $1'

        const values = [
            email
        ]

        db.query(query, values, (err, data) => {
            if (err) return res.json(err)
            data = JSON.stringify(data.rows)
            let result = (JSON.parse(data))[0].usu_nome

            req.session.name = result

            const name = req.session.name

            res.render('../views/home.ejs', { name, email })
        })
    }

}