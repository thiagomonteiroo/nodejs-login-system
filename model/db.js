import pkg from 'pg'
const { Client } = pkg
import 'dotenv/config'

export const db = new Client({
    user: process.env.USER_DB,
    host: process.env.HOST_DB,
    database: process.env.DATABASE_DB,
    password: process.env.PASSWORD_DB,
    port: process.env.PORT_DB,
})

db.connect()