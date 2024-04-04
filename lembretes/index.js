const express = require ('express');
const bodyParser = require('body-parser');
const axios = require("axios");
const app = express();
app.use(bodyParser.json());
lembretes = {};
contador = 0;

app.put("/lembretes", async (req, res) => {
    contador++;
    const { texto } = req.body;
    lembretes[contador] = {
        id:contador,
        texto:texto
    };
    await axios.post("http://localhost:10000/eventos", {
    tipo: "LembreteCriado",
    dados: {
    contador,
    texto,
   },
});

    res.status(201).send(lembretes[contador]);
});

app.get ('/lembretes', (req, res) => {
    res.send(lembretes);
});

app.listen(4000, () => {
    console.log('lembretes. Porta 4000');
});