import express from "express";
import Event from "../../models/event.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const event = await Event.find();
        res.status(200).json(event);
    } catch (error) {
        throw new Error(error);
    }
})

router.post("/", async (req, res) => {

    const { nome, descricao, data, hora, localidade } = req.body;

    const query = {
        nome, 
        descricao, 
        data, 
        hora, 
        localidade
    }

    try {
        const event = await Event.create(query);
        res.status(200).json(event);
    } catch (error) {
        throw new Error(error);
    }
})

router.patch("/", async (req, res) => {
    
    const { id } = req.query;

    const { nome, descricao, data, hora, localidade } = req.body;;

    const query = {
        nome, 
        descricao, 
        data, 
        hora, 
        localidade
    }

    try {
        const event = await Event.findOneAndUpdate(id, query);
        res.status(200).json(event);
    } catch (error) {
        throw new Error(error)
    }
})

router.delete("/", async (req, res) => {
    const { id } = req.query;

    const query = {
        id
    }

    try {
        const event = await Event.findOneAndRemove(query);
        res.status(200).json(event);
    } catch (error) {
        throw new Error(error)
    }
})

export default router;