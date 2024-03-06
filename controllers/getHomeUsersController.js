import { db } from "../model/db.js"


export const getHomeUsers = (req, res) => {
    const name = req.session.name

    const query = 'SELECT * FROM usuarios'

    db.query(query, (err, data) => {
        data = JSON.stringify(data.rows)

        data = JSON.parse(data)

        return res.status(200).render('../views/homeUsers.ejs', { data, name })
    })

}