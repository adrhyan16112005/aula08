const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Array to store flower arrangements
let arranjos = [];

// Create a new flower arrangement
app.post('/arranjos', (req, res) => {
    const { nome, preco, tipodeflores, dimensao, datadeentrega, frete, endereco } = req.body;

    if (!nome || !preco || !tipodeflores || !dimensao || !datadeentrega || !frete || !endereco) {
        return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
    }

    const novoArranjo = {
        id: arranjos.length + 1,
        nome,
        preco,
        tipodeflores,
        dimensao,
        datadeentrega,
        frete,
        endereco,
    };

    arranjos.push(novoArranjo);
    res.status(201).json(novoArranjo);
});

// Get all flower arrangements
app.get('/arranjos', (req, res) => {
    res.status(200).json(arranjos);
});

// Get a single flower arrangement by ID
app.get('/arranjos/:id', (req, res) => {
    const { id } = req.params;
    const arranjo = arranjos.find(a => a.id === parseInt(id));

    if (!arranjo) {
        return res.status(404).json({ erro: 'Arranjo não encontrado.' });
    }

    res.status(200).json(arranjo);
});

// Update a flower arrangement by ID
app.put('/arranjos/:id', (req, res) => {
    const { id } = req.params;
    const { nome, preco, tipodeflores, dimensao, datadeentrega, frete, endereco } = req.body;

    const arranjo = arranjos.find(a => a.id === parseInt(id));

    if (!arranjo) {
        return res.status(404).json({ erro: 'Arranjo não encontrado.' });
    }

    // Update only provided fields
    if (nome) arranjo.nome = nome;
    if (preco) arranjo.preco = preco;
    if (tipodeflores) arranjo.tipodeflores = tipodeflores;
    if (dimensao) arranjo.dimensao = dimensao;
    if (datadeentrega) arranjo.datadeentrega = datadeentrega;
    if (frete) arranjo.frete = frete;
    if (endereco) arranjo.endereco = endereco;

    res.status(200).json(arranjo);
});

// Delete a flower arrangement by ID
app.delete('/arranjos/:id', (req, res) => {
    const { id } = req.params;
    const index = arranjos.findIndex(a => a.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ erro: 'Arranjo não encontrado.' });
    }

    arranjos.splice(index, 1);
    res.status(204).send();
});

// Start the server
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
