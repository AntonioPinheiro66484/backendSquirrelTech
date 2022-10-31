const cliente = require("../models/cliente.js")

class clienteController{
    static listarClientes=(req,res)=>{
        cliente.find((err,clientes)=>{
            res.status(200).json(clientes)
        })
    }
    static cadastrarClientes=(req,res)=>{
        let clientes = new cliente(req.body)
        clientes.save((err)=>{
            if(err){
                res.status(500).send({
                    massage:`${err.message}-falha ao cadastrar um cliente`
                })
            }else{
                res.status(200).send(clientes.toJSON())
            }
        })
    }

    static atualizarCliente=(req,res)=>{
        const id = req.params.id
        cliente.findByIdAndUpdate(id,{$set: req.body},(err)=>{
            if(!err){
                res.status(200).send({
                    message:'cliente atualizado com sucesso'
                })
            }else{
                res.status(500).send({
                    massage:`${err.message}-falha ao atualizar um cliente`
                })
            }
        })
    }
    static listarCliente=(req,res)=>{
        const id = req.params.id
        cliente.findById(id,(err,clientes)=>{
            if(!err){
                res.status(200).send(clientes)
            }else{
                res.status(500).send({
                    massage:`${err.message}-falha ao consultar um cliente`
                })
            }
        })
    }
    static excluirCliente=(req,res)=>{
        const id = req.params.id
        cliente.findByIdAndDelete(id,(err)=>{
            if(!err){
                res.status(200).send({
                    message:'cliente excluido com sucesso'
                })
            }else{
                res.status(500).send({
                    massage:`${err.message}-falha ao excluir um cliente`
                })
            }
        })
    }
}

module.exports=clienteController;