import mongoose from "mongoose";

const Event = mongoose.model('Event', {
    nome: String,
    descricao: String,
    data: Date,
    hora: Date,
    localidade: String,
})

export default Event