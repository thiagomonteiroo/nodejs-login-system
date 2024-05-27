import { db } from "../model/db.js"
import { compare } from 'bcrypt'

export const getLogin = (_, res) => {
    return res.status(200).render('../views/login.ejs')
}

export const postLogin = async (req, res, next) => {
    //a consulta trará o email e a senha juntos, a senha será verificada por codigo
    const query = 'SELECT usu_email, usu_senha FROM usuarios WHERE usu_email = $1'

    let password = req.body.password

    const values = [
        req.body.email  
    ]

    db.query(query, values, (err, data) => {
        if (err) return res.json(err)

        data = JSON.stringify(data.rows)
        
        //verificando se a consulta teve retorno e encontrou um email
        if (data.length != 0) {
            let data_email = (JSON.parse(data))[0].usu_email
            let data_password = (JSON.parse(data))[0].usu_senha

            //verificacao de senha
            compare(password, data_password, (err, result) => {
                if (result) {
                    req.session.email = data_email
                    return res.status(200).redirect('/home')
                } else {
                    return res.status(400).redirect('/')
                }
            })
        } else {
            return res.status(400).redirect('/')
        }
        
    })
}
