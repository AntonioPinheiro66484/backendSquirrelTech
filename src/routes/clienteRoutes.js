const express = require("express")
const clienteController = require("../controllers/clientecontroller.js")
const routeCliente = express.Router()
routeCliente
    .get("/mostrar-clientes", clienteController.listarClientes)
    .post("/cadastrar-cliente", clienteController.cadastrarClientes)
    .put("/atualizar-cliente/:id", clienteController.atualizarCliente)
    .delete("/deletar-cliente/:id", clienteController.excluirCliente)
    .get("/mostrar-cliente/:id", clienteController.listarCliente)

module.exports = routeCliente

