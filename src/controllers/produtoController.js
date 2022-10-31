const produto = require("../models/produto.js")

class produtoController{
    static listarProdutos=(req,res)=>{
        produto.find((err,produtos)=>{
            res.status(200).json(produtos)
        })
    }
    static cadastrarProdutos=(req,res)=>{
        let produtos = new produto(req.body)
        produtos.save((err)=>{
            if(err){
                res.status(500).send({
                    massage:`${err.message}-falha ao cadastrar um produto`
                })
            }else{
                res.status(200).send(produtos.toJSON())
            }
        })
    }

    static atualizarProduto=(req,res)=>{
        const id = req.params.id
        produto.findByIdAndUpdate(id,{$set: req.body},(err)=>{
            if(!err){
                res.status(200).send({
                    message:'produto atualizado com sucesso'
                })
            }else{
                res.status(500).send({
                    massage:`${err.message}-falha ao atualizar um produto`
                })
            }
        })
    }
    static listarProduto=(req,res)=>{
        const id = req.params.id
        produto.findById(id,(err,produtos)=>{
            if(!err){
                res.status(200).send(produtos)
            }else{
                res.status(500).send({
                    massage:`${err.message}-falha ao consultar um produto`
                })
            }
        })
    }
    static excluirProduto=(req,res)=>{
        const id = req.params.id
        produto.findByIdAndDelete(id,(err)=>{
            if(!err){
                res.status(200).send({
                    message:'produto excluido com sucesso'
                })
            }else{
                res.status(500).send({
                    massage:`${err.message}-falha ao excluir um produto`
                })
            }
        })
    }
}

module.exports=produtoController;