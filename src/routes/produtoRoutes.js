const express = require("express")
const produtoController = require("../controllers/produtocontroller.js")
const routeProduto = express.Router()
routeProduto
    .get("/mostrar-produtos", produtoController.listarProdutos)
    .post("/cadastrar-produto", produtoController.cadastrarProdutos)
    .put("/atualizar-produto/:id", produtoController.atualizarProduto)
    .delete("/deletar-produto/:id", produtoController.excluirProduto)
    .get("/mostrar-produto/:id", produtoController.listarProduto)

module.exports = routeProduto