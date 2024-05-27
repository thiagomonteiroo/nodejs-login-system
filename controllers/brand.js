import { db } from "../model/db.js"

export const getBrand = (req, res) => {
    const role = req.session.role
    const email = req.session.email
    return res.status(200).render('../views/newBrand.ejs', {role})
}

export const postBrand =  (req, res) => {
    const query = 'INSERT INTO marca (mar_nome) VALUES ($1)'

    const values = [
        req.body.brand
    ]

    db.query(query, values, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).redirect('/home/newBrand')
    })
}
