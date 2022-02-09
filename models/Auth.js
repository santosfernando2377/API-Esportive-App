const mongoose = require('mongoose');

const Auth = mongoose.model('Auth', {
    email: String,
    senha: String
})

module.exports = Auth