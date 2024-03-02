// const { Client } = require('pg')
import pkg from 'pg'
const { Client } = pkg

export const db = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'xxx',
    password: 'xxx',
    port: 5432,
})

db.connect()