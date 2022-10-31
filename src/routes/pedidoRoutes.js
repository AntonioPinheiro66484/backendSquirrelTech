const express = require("express")
const pedidoController = require("../controllers/pedidoscontroller.js")
const routePedido = express.Router()
routePedido
    .get("/mostrar-pedidos", pedidoController.listarPedidos)
    .post("/cadastrar-pedido", pedidoController.cadastrarPedidos)
    .put("/atualizar-pedidos/:id", pedidoController.atualizarPedidos)
    .delete("/deletar-pedidos/:id", pedidoController.excluirPedidos)
    .get("/mostrar-pedidos/:id", pedidoController.listarPedidos)

module.exports = routepedidos