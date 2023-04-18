import express from "express";
import Event from "../models/Event.js"

const router = express.Router();

router.post('/', async (req, res) => {
    const { nomeEvento, descricaoEvento, dataEvento, horaEvento, localidadeEvento, tipoEsporteEvento, concluidoEvento } = req.body

    if(!nomeEvento) {
        res.status(422).json({ message: 'O campo nome é obrigatório!' })
        return
    }
    
    if(!descricaoEvento) {
        res.status(422).json({ message: 'O campo descricao é obrigatório!' })
        return
    }

    if(!dataEvento) {
        res.status(422).json({ message: 'O campo data é obrigatório!' })
        return
    }

    if(!horaEvento) {
        res.status(422).json({ message: 'O campo hora é obrigatório!' })
        return
    }

    if(!localidadeEvento) {
        res.status(422).json({ message: 'O campo localidade é obrigatório!' })
        return
    }

    if(!tipoEsporteEvento) {
        res.status(422).json({ message: 'O campo tipo de esporte é obrigatório!' })
        return
    }

    const event = {
        nomeEvento,
        descricaoEvento,
        dataEvento,
        horaEvento,
        localidadeEvento,
        tipoEsporteEvento,
        concluidoEvento
    }

    try {
        await Event.create(event)
        res.status(200).json(event)
    } catch (error) {
        res.status(500).json({message: error})
    }
})

router.get('/', async (req, res) => {
    try {
        const event = await Event.find()
        res.status(200).json(event)
    } catch (error) {
        res.status(500).json({message: error})
    }
})

router.get('/:id', async (req, res) => {
    
    const id = req.params.id

    try {
        const event = await Event.findOne({_id: id})

        if(!event) {
            res.status(422).json({ message: 'O evento não foi encontrado!' })
            return
        }

        res.status(200).json(event)
    } catch (error) {
        res.status(500).json({message: error})
    }
})

router.patch('/:id', async (req, res) => {
    const id =  req.params.id

    const { nomeEvento, descricaoEvento, dataEvento, horaEvento, localidadeEvento, tipoEsporteEvento, concluidoEvento } = req.body

    const event = {
        nomeEvento,
        descricaoEvento,
        dataEvento,
        horaEvento,
        localidadeEvento,
        tipoEsporteEvento,
        concluidoEvento
    }

    try {
        const updateEvent = await Event.updateOne({_id: id}, event)

        if(updateEvent.matchedCount === 0){
            res.status(422).json({message: 'O evento não foi encontrado!'})
            return
        }

        res.status(200).json(event)

    } catch (error) {
        res.status(500).json({message: error})
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const event =  await Event.findOne({_id: id})

    if(!event){
        res.status(422).json({message: 'O evento não foi encontrado!'})
        return
    }

    try {
        await Event.deleteOne({_id: id})
        res.status(200).json({message: 'O evento foi excluído com sucesso!'})
    } catch (error) {
        res.status(500).json({message: error})
    }
})

export default router