const express = require("express")
const pedidosController = require("../controllers/pedidoscontroller.js")
const routePedido = express.Router()
routepedidos
    .get("/mostrar-pedidos", pedidosController.listarpedidos)
    .post("/cadastrar-pedidos", pedidosController.cadastrarpedidos)
    .put("/atualizar-pedidos/:id", pedidosController.atualizarpedidos)
    .delete("/deletar-pedidos/:id", pedidosController.excluirpedidos)
    .get("/mostrar-pedidos/:id", pedidosController.listarpedidos)

module.exports = routepedidos