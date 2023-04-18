// Importando as dependencias
import env from "dotenv";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
const app = express();

env.config();
app.use(helmet());

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

import personRoutes from "./routes/people/index.js";
import eventRoutes from "./routes/event.js";

app.use('/people', personRoutes)
app.use('/event', eventRoutes)

const USERDB = process.env.USERDB
const PASSDB = encodeURIComponent(process.env.PASSDB)
const URLDB = process.env.URLDB
const PORT = process.env.PORT || 3000

mongoose.set('strictQuery', false).connect(`mongodb+srv://${USERDB}:${PASSDB}@${URLDB}/myFirstDatabase?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(PORT);
    })
    .catch((err) => {
        throw err
    })