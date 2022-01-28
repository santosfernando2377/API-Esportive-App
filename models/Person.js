const mongoose = require("mongoose");

const Person = mongoose.model('Person', {
    nomeCompleto: String,
    dataNascimento: Number,
    tipoEsporte: String,
    localidadeCidade: String,
    cadastroConcluido: Boolean,
    cadastroExcluido: Boolean,
})

module.exports = Person