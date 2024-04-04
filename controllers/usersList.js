import { db } from "../model/db.js"


export const getHomeUsers = (req, res) => {
    const name = req.session.name
    const role = req.session.role

    const query = 'SELECT * FROM usuarios ORDER BY usu_id'

    db.query(query, (err, data) => {
        data = JSON.stringify(data.rows)

        data = JSON.parse(data)

        return res.status(200).render('../views/homeUsers.ejs', { data, name, role })
    })

}