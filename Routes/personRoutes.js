const router = require('express').Router();
const res = require('express/lib/response');
const { append } = require('express/lib/response');
const Person = require('../models/Person');

router.post('/', async (req, res) =>{
    const { nomeCompleto, dataNascimento, tipoEsporte, localidadeCidade, cadastroConcluido, cadastroExcluido} = req.body


    // Validação dos campos
    if(!nomeCompleto) {
        res.status(422).json({ message: 'O campo nome é obrigatório!' })
        return
    }

    if(!dataNascimento) {
        res.status(422).json({ message: 'O campo data de nascimento é obrigatório!'})
        return
    }

    if(!tipoEsporte) {
        res.status(422).json({ message: 'O campo tipo de esporte é obrigatório!'})
        return
    }

    if(!localidadeCidade) {
        res.status(422).json({ message: 'O campo localidade é obrigatório!'})
        return
    }
    
    const person = {
        nomeCompleto,
        dataNascimento,
        tipoEsporte,
        localidadeCidade,
        cadastroConcluido,
        cadastroExcluido
    }

    try {
        await Person.create(person)
        res.status(201).json({message: 'Pessoa inserida no sistema com sucesso!'})   
    } catch (error) {
        res.status(500).json({message: error})
    }
})

router.get('/', async (req, res) => {
    try {
        const people = await Person.find()
        res.status(200).json(people)
    } catch (error) {
        res.status(500).json({message: error})
    }
})

router.get('/:id', async (req, res) => {
    
    const id = req.params.id

    try {
        const people = await Person.findOne({_id: id})

        if(!people) {
            res.status(422).json({ message: 'O usuário não foi encontrado!' })
            return
        }

        res.status(200).json(people)
    } catch (error) {
        res.status(500).json({message: error})
    }
})

module.exports = router