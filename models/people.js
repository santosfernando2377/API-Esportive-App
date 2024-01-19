import mongoose from "mongoose";

const People = mongoose.model('People', {
    nome: String,
    email: String,
    senha: String,
    ativado: Boolean,
    profissao: String,
})

export default People