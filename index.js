// Importando as dependencias
import env from "dotenv";
import express from "express";
import mongoose from "mongoose";
const app = express();

env.config();

// Forma de ler o json
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

// Rotas

import personRoutes from "./routes/people.js";
import eventRoutes from "./routes/event.js";
import authRoutes from "./routes/auth.js";

app.use('/person', personRoutes)
app.use('/event', eventRoutes)
app.use('/auth', authRoutes)

// Conectadno com banco de dados

const USERDB = process.env.USERDB
const PASSDB = encodeURIComponent(process.env.PASSDB)
const URLDB = process.env.URLDB
const PORT = process.env.PORT || 3000

mongoose.connect(`mongodb+srv://${USERDB}:${PASSDB}@${URLDB}/myFirstDatabase?retryWrites=true&w=majority`)
.then(() =>{
    app.listen(PORT);
})
.catch((err) => {
    console.log(err);
})