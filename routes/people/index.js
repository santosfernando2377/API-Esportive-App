import express from "express";
import People from "../../models/people.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const people = await People.find();
        res.status(200).json(people);
    } catch (error) {
        throw new Error(error);
    }
})

router.post("/", async (req, res) => {

    const { nome, email, senha, profissao } = req.query;

    const query = {
        nome,
        email,
        senha,
        ativado: true,
        profissao
    }

    try {
        const people = await People.create(query);
        res.status(200).json(people);
    } catch (error) {
        throw new Error(error);
    }
})

router.patch("/", async (req, res) => {
    
    const { id } = req.query;

    const { nome, email, senha, ativado, profissao } = req.body;

    const query = {
        nome,
        email,
        senha,
        ativado,
        profissao
    }

    try {
        const people = await People.findOneAndUpdate(id, query);
        res.status(200).json(people);
    } catch (error) {
        throw new Error(error);
    }
})

router.delete("/", async (req, res) => {
    const { id } = req.query;

    const query = {
        id
    }

    try {
        const people = await People.findOneAndRemove(query);
        res.status(200).json(people);
    } catch (error) {
        throw new Error(error);
    }
})

export default router;