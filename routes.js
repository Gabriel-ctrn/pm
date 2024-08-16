import express from "express"
import * as userController from "./controllers/usuarios.js"

const routes = express.Router()

routes.get("/usuarios", (req, res)=>{
    res.json(userController.listar())
})

routes.get("/usuarios/:id", (req, res)=>{
    const id = req.params.id
    res.json(userController.buscarPorId(id))
})
routes.post("/usuarios", (req, res)=>{
    const puxar = req.body
    res.json(userController.criar(puxar))
})
routes.delete("/usuarios/:id", (req, res)=>{
    const delet = req.params.id
    res.json(userController.deletar(delet))
})
routes.put("/usuarios/:id", (req, res)=>{
    const modificada = req.params.id
    const info = req.body
    res.json(userController.modificar(modificada, info))
})


export default routes
