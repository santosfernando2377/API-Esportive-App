import mongoose from "mongoose";

const Person = mongoose.model('Person', {
    nomeCompleto: String,
    dataNascimento: Number,
    tipoEsporte: String,
    localidadeCidade: String,
    acessoEmail: String,
    acessoSenha: String,
    cadastroConcluido: Boolean,
    cadastroExcluido: Boolean,
})

export default Person