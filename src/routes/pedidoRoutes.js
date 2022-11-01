const express = require("express")
const pedidoController = require("../controllers/pedidocontroller.js")
const routePedido = express.Router()
routePedido
    .get("/mostrar-pedidos", pedidoController.listarPedidos)
    .post("/cadastrar-pedido", pedidoController.cadastrarPedidos)
    .put("/atualizar-pedidos/:id", pedidoController.atualizarPedido)
    .delete("/deletar-pedidos/:id", pedidoController.excluirPedido)
    .get("/mostrar-pedido/:id", pedidoController.listarPedido)

module.exports = routePedido