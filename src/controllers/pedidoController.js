const pedido = require("../models/pedidos.js")

class pedidosController{
    static listarPedidos=(req,res)=>{
        pedido.find((err,pedidos)=>{
            res.status(200).json(pedidos)
        })
    }
    static cadastrarPedidos=(req,res)=>{
        let pedidos = new pedidos(req.body)
        pedidos.save((err)=>{
            if(err){
                res.status(500).send({
                    massage:`${err.message}-falha ao cadastrar um pedidos`
                })
            }else{
                res.status(200).send(pedidos.toJSON())
            }
        })
    }

    static atualizarPedidos=(req,res)=>{
        const id = req.params.id
        pedido.findByIdAndUpdate(id,{$set: req.body},(err)=>{
            if(!err){
                res.status(200).send({
                    message:'pedidos atualizado com sucesso'
                })
            }else{
                res.status(500).send({
                    massage:`${err.message}-falha ao atualizar um pedidos`
                })
            }
        })
    }
    static listarPedidos=(req,res)=>{
        const id = req.params.id
        pedido.findById(id,(err,pedidos)=>{
            if(!err){
                res.status(200).send(pedidos)
            }else{
                res.status(500).send({
                    massage:`${err.message}-falha ao consultar um pedidos`
                })
            }
        })
    }
    static excluirPedidos=(req,res)=>{
        const id = req.params.id
        pedido.findByIdAndDelete(id,(err)=>{
            if(!err){
                res.status(200).send({
                    message:'pedidos excluido com sucesso'
                })
            }else{
                res.status(500).send({
                    massage:`${err.message}-falha ao excluir um pedidos`
                })
            }
        })
    }
}

module.exports=pedidosController;