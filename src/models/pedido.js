const mongoose = require("mongoose")
const pedidoEsquema = new mongoose.Schema(
    {
        cpf: {
            type: String,
            required: true
        },
        codigoProduto: {
            type: String,
            required: true
        },
        Quantidade: {
            type: String,
            required: true
        }

    }
)

const pedido=mongoose.model("pedido",pedidoEsquema)
module.exports=pedido;
