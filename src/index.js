import express from "express";
import bodyParser from "body-parser";
import router from "../routes/login.js";
import session from "express-session";

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.use(express.json())
app.use(session({
    secret: 'fafram',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use("/", router)


app.listen(3000, console.log('server is running'))