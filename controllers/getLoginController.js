import { db } from "../model/db.js"

export const getLogin = (_, res) => {
    return res.status(200).render('../views/login.ejs')
}