import { db } from "../model/db.js"

export const getRegister = (_, res) => {
    return res.status(200).render('../views/register.ejs')
}