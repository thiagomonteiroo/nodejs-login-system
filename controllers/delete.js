import { db } from "../model/db.js"
import 'dotenv/config'

export const deleteUser = (req, res) => {
    const query = 'DELETE FROM usuarios WHERE usu_id = $1'

    const values = [
        req.params.id,
    ]

    db.query(query, values, (err) => {
        if (err) return res.json(err)

        return res.status(303).redirect(303, '/home/users')
    })

}
