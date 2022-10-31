const express = require("express")
const pedidoController = require("../controllers/pedidoscontroller.js")
const routePedido = express.Router()
routePedido
    .get("/mostrar-pedidos", pedidoController.listarPedidos)
    .post("/cadastrar-pedido", pedidoController.cadastrarPedidos)
    .put("/atualizar-pedidos/:id", pedidoController.atualizarPedido)
    .delete("/deletar-pedidos/:id", pedidoController.excluirPedido)
    .get("/mostrar-pedidos/:id", pedidoController.listarPedido)

module.exports = routePedido