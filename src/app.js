const express = require("express");
const cors = require("cors");
const db = require('./config/dbconect.js');
const routes = require('./routes/index.js');
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", '*');
    res.header("Access-Control-Allow-Origin", '*');
    res.header("'Content-Type'", "'multipart/form-data'");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors())
    next()
})
try {
    db.on("error", console.log.bind(console, "erro de conexão com o banco"))
    db.once("open", () => {
        console.log("conexão bem sucedida")
    })
}catch(error){console.log({error})}
app.use(express.json())
routes(app)
module.exports = app
