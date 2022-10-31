const mongoose = require("mongoose")
const produtoEsquema = new mongoose.Schema(
    {
        nomeproduto: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        fabricante: {
            type: String,
            required: true
        },
        fornecedor: {
            type: String,
            required: true
        },
        cnpjfornecedor: {
            type: String,
            required: true
        },
        precoproduto: {
            type: String,
            required: true
        },
        datacadastroproduto: {
            type: String,
            required: true
        },
        quantidadeproduto: {
            type: String,
            required: true
        }
    }
)

const produto=mongoose.model("produto",produtoEsquema)
module.exports=produto;
