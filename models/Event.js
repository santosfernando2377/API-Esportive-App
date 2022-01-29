const mongoose =  require('mongoose');

const Event = mongoose.model('Event', {
    nomeEvento: String,
    descricaoEvento: String,
    dataEvento: String,
    horaEvento: String,
    localidadeEvento: String,
    tipoEsporteEvento: String,
    concluidoEvento: Boolean
})

module.exports = Event