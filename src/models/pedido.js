const mongoose = require("mongoose")
const pedidoEsquema = new mongoose.Schema(
    {
        cpf: {
            type: String,
            required: true
        },
        codigoProduto: {
            type: Number,
            required: true
        },
        Quantidade: {
            type: Number,
            required: true
        },

    }
)

const pedido=mongoose.model("pedido",pedidoEsquema)
module.exports=pedido;
