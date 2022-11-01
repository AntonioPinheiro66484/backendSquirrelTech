const pedido = require("../models/pedido.js")

class pedidoController{
    static listarPedidos=(req,res)=>{
        pedido.find((err,pedidos)=>{
            res.status(200).json(pedidos)
        })
    }
    static cadastrarPedidos=(req,res)=>{
        let pedidos = new pedido(req.body)
        pedidos.save((err)=>{
            if(err){
                res.status(500).send({
                    massage:`${err.message}-falha ao cadastrar um pedido`
                })
            }else{
                res.status(200).send(pedidos.toJSON())
            }
        })
    }

    static atualizarPedido=(req,res)=>{
        const id = req.params.id
        pedido.findByIdAndUpdate(id,{$set: req.body},(err)=>{
            if(!err){
                res.status(200).send({
                    message:'pedido atualizado com sucesso'
                })
            }else{
                res.status(500).send({
                    massage:`${err.message}-falha ao atualizar um pedido`
                })
            }
        })
    }
    static listarPedido=(req,res)=>{
        const id = req.params.id
        pedido.findById(id,(err,pedidos)=>{
            if(!err){
                res.status(200).send(pedidos)
            }else{
                res.status(500).send({
                    massage:`${err.message}-falha ao consultar um pedido`
                })
            }
        })
    }
    static excluirPedido=(req,res)=>{
        const id = req.params.id
        pedido.findByIdAndDelete(id,(err)=>{
            if(!err){
                res.status(200).send({
                    message:'pedido excluido com sucesso'
                })
            }else{
                res.status(500).send({
                    massage:`${err.message}-falha ao excluir um pedido`
                })
            }
        })
    }
}

module.exports=pedidoController;