import { db } from "../model/db.js"


//pagina de listagem de produtos
export const getProducts = (req, res) => {
    const query = 'SELECT * FROM produto'

    db.query(query, (err, data) => {
        if (err) return res.json(err)

        data = JSON.stringify(data.rows)
        data = JSON.parse(data)

        const role = req.session.role

        return res.status(200).render('../views/products.ejs', {data, role})
    })
}

//pagina de cadastro de produtos
export const getNewProduct = (req, res) => {
    const query = 'SELECT * FROM marca'

    db.query(query, (err, data) => {
        if (err) return res.json(err)

        data = JSON.stringify(data.rows)
        data = JSON.parse(data)

        const brand = data
        const role = req.session.role

        req.session.brand = brand

        return res.status(200).render('../views/newProduct.ejs', {brand, role})
    })
}

//rota para cadastro de protudos
export const postProduct =  (req, res) => {
    const query = 'INSERT INTO produto (pro_nome, pro_data_fabr, pro_preco, pro_marca) VALUES ($1, now(), $2, $3)'

    const values = [
        req.body.name,
        req.body.price,
        req.body.brand
    ]

    db.query(query, values, (err) => {
        if (err) return res.json(err)

        return res.status(200).redirect('/home/newProduct')
    })
}

