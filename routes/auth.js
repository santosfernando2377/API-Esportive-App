import express from "express"
import Auth from "../models/people.js"

const router = express.Router()

router.post('/', async (req, res) => {
    
    const { email, senha } = req.body

        if(!email) {
            res.status(422).json({ message: 'O campo email é obrigatório' })
        }

        if(!senha) {
            res.status(422).json({ message: 'O campo senha é obrigatório'})
        }
    
    const auth = {
        email,
        senha
    }

    try {
        const auth = await Auth.findOne({ acessoEmail: email, acessoSenha: senha })
        
        if(!auth) {
            res.status(422).json({ message: 'Nenhum usuário encontrado!' })
            return
        }
        
        res.status(200).json({ message: auth })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

export default router