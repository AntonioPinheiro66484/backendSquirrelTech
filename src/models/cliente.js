const mongoose = require("mongoose")
const clienteEsquema = new mongoose.Schema(
    {
        cpf: {
            type: String,
            required: true
        },
        nome: {
            type: String,
            required: true
        },
        datanascimento: {
            type: String,
            required: true
        },
        cep: {
            type: String,
            required: true
        },
        endereco: {
            type: String,
            required: true
        }
    }
)

const cliente=mongoose.model("cliente",clienteEsquema)
module.exports=cliente;
