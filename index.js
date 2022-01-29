// Importando as dependencias
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Forma de ler o json
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

// Endpoint

app.get("/", (req, res) => {
    res.json({
        message: {
            Nome: 'API Esportive App',
            Documentacao: 'xxx'
        }
    })  
})

// Rotas

const personRoutes = require("./Routes/personRoutes")
const eventRoutes =  require("./Routes/eventRoutes")

app.use('/person', personRoutes)
app.use('/event', eventRoutes)

// Conectadno com banco de dados

const userDB = process.env.userDB
const passDB = encodeURIComponent(process.env.passDB)

mongoose.connect(`mongodb+srv://${userDB}:${passDB}@esportiveapp.u6xqr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then(() =>{
    console.log("Conectamos com o MongoDB");
    app.listen(3000);
})
.catch((err) => {
    console.log(err);
})