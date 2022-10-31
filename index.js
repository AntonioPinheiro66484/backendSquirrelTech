const app = require("./src/app.js");

const porta=process.env.PORT || 5000;
app.listen(porta,()=>{
    console.log("Servidor funcionando em http://localhost:"+porta)
})