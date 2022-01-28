// Importando as dependencias
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

app.get('/', (req, res) => {
    res.json({
        message: {
            Nome: 'API Esportive App',
            Documentacao: 'xxx'
        }
    })  
})

// Rotas

const personRoutes = require('./Routes/personRoutes')

app.use('/person', personRoutes)

// Conectadno com banco de dados

const userDB = 'santosfernando2377'
const passDB = encodeURIComponent('34778929')

mongoose.connect(`mongodb+srv://${userDB}:${passDB}@esportiveapp.u6xqr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then(() =>{
    console.log("Conectamos com o MongoDB");
    app.listen(3000);
})
.catch((err) => {
    console.log(err);
})