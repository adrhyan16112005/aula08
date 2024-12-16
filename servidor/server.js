const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let arranjos = [];

app.post('/arranjos', (req, res) => {
    const { nome,preço,tipodeflores,dimensão,datadeentrega,frete,endereço} = req.body;
    
    if (!nome || !preço || !tipodeflores || !dimensão) {
        return res.status(400).json({ erro: 'N' });
    }

    const novoArranjo = { id: arranjos.length + 1, nome, email };
    arranjos.push(novoArranjo);
    
    res.status(201).json(novoArranjo);
});

app.get('/arranjos', (req, res) => {
    res.status(200).json(arranjos);
});

app.get('/arranjos/:id', (req, res) => {
    const { id } = req.params;
    const arranjos = arranjos.find(u => u.id === parseInt(id));
    
    if (!arranjos) {
        return res.status(404).json({ erro: 'Arranjo não encontrado' });
    }
    
    res.status(200).json(arranjos);
});

app.put('/arranjos/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    
    const arranjos = arranjos.find(u => u.id === parseInt(id));
    
    if (!usuario) {
        return res.status(404).json({ erro: 'Arranjo não encontrado' });
    }
    
    arranjos.nome = nome || arranjos.nome;
    arranjos.email = email || arranjos.email;
    
    res.status(200).json(arranjos);
});

app.delete('/arranjos/:id', (req, res) => {
    const { id } = req.params;
    const index = arranjos.findIndex(u => u.id === parseInt(id));
    
    if (index === -1) {
        return res.status(404).json({ erro: 'Arranjo não encontrado' });
    }
    
    arranjos.splice(index, 1);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
