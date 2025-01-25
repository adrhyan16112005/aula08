const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

<<<<<<< HEAD
// Array to store flower arrangements
let arranjos = [];
=======
let arranjos = [
  { id: 1, nome: "Arranjo de Rosas Vermelhas", tipo: "Rosas", preco: 100.00, dataCriacao: "2025-01-01", disponibilidade: "Sem estoque", descricao: "Arranjo com rosas vermelhas e verde que nos trás uma vibração romântica." },
  { id: 2, nome: "Arranjo de Lírios", tipo: "Lírios", preco: 69.90, dataCriacao: "2025-01-02", disponibilidade: "Em estoque", descricao: "Arranjo com lírios e flores do campo que simboliza paz e tranquilidade." },
  { id: 3, nome: "Arranjo de Girassóis", tipo: "Girassóis", preco: 89.90, dataCriacao: "2025-01-20", disponibilidade: "Em estoque", descricao: "Arranjo vibrante e alegre de girassóis para iluminar qualquer ambiente." },
  { id: 4, nome: "Arranjo de Orquídeas Brancas", tipo: "Orquídeas", preco: 129.90, dataCriacao: "2025-01-19", disponibilidade: "Em estoque", descricao: "Elegante arranjo de orquídeas brancas, ideal para ocasiões especiais." },
  { id: 5, nome: "Arranjo de Lírios do Vale", tipo: "Lírios do Vale", preco: 99.00, dataCriacao: "2025-01-18", disponibilidade: "Em estoque", descricao: "Delicado arranjo de lírios do vale, flores que representam pureza e delicadeza." },
  { id: 6, nome: "Arranjo de Tulipas Coloridas", tipo: "Tulipas", preco: 89.90, dataCriacao: "2025-01-15", disponibilidade: "Em estoque", descricao: "Arranjo de tulipas em várias cores, para trazer frescor e beleza ao ambiente." },
  { id: 7, nome: "Arranjo de Margaridas", tipo: "Margaridas", preco: 69.90, dataCriacao: "2025-01-10", disponibilidade: "Em estoque", descricao: "Arranjo simples e encantador de margaridas, perfeito para qualquer ocasião." },
  { id: 8, nome: "Arranjo de Rosas e Lírios", tipo: "Rosas, Lírios", preco: 109.90, dataCriacao: "2025-01-12", disponibilidade: "Em estoque", descricao: "Uma combinação de rosas e lírios, que simboliza amor e pureza." },
  { id: 9, nome: "Arranjo de Flores do Campo", tipo: "Flores do Campo", preco: 79.90, dataCriacao: "2025-01-22", disponibilidade: "Em estoque", descricao: "Arranjo com flores silvestres do campo, que trazem um toque rústico e natural." },
  { id: 10, nome: "Arranjo de Violetas", tipo: "Violetas", preco: 74.90, dataCriacao: "2025-01-17", disponibilidade: "Em estoque", descricao: "Arranjo delicado de violetas, flores que representam a fé e a lealdade." },
  { id: 11, nome: "Arranjo de Cravos Vermelhos", tipo: "Cravos", preco: 89.90, dataCriacao: "2025-01-21", disponibilidade: "Em estoque", descricao: "Arranjo de cravos vermelhos, representando amor eterno e paixão." },
  { id: 12, nome: "Arranjo de Jasmim", tipo: "Jasmim", preco: 99.00, dataCriacao: "2025-01-23", disponibilidade: "Em estoque", descricao: "Jasmim é um símbolo de amor e beleza, um arranjo encantador e perfumado." },
  { id: 13, nome: "Arranjo de Flores Tropicais", tipo: "Tropicais", preco: 119.90, dataCriacao: "2025-01-24", disponibilidade: "Em estoque", descricao: "Arranjo com flores tropicais exóticas que trazem cor e vida ao ambiente." },
  { id: 14, nome: "Arranjo de Callas", tipo: "Callas", preco: 149.90, dataCriacao: "2025-01-16", disponibilidade: "Em estoque", descricao: "Arranjo de callas, flores sofisticadas que simbolizam elegância e beleza." },
  { id: 15, nome: "Arranjo de Flores Mistas", tipo: "Mistas", preco: 79.90, dataCriacao: "2025-01-10", disponibilidade: "Em estoque", descricao: "Arranjo com uma mistura de flores variadas, para um toque colorido e alegre." },
  { id: 16, nome: "Arranjo de Rosas e Girassóis", tipo: "Rosas, Girassóis", preco: 109.90, dataCriacao: "2025-01-12", disponibilidade: "Em estoque", descricao: "Combinando a paixão das rosas vermelhas com a energia dos girassóis." },
  { id: 17, nome: "Arranjo de Calêndulas", tipo: "Calêndulas", preco: 69.90, dataCriacao: "2025-01-14", disponibilidade: "Em estoque", descricao: "Arranjo de calêndulas, flores de cores vibrantes, que trazem alegria e otimismo." },
  { id: 18, nome: "Arranjo de Lavanda", tipo: "Lavanda", preco: 79.90, dataCriacao: "2025-01-13", disponibilidade: "Em estoque", descricao: "Arranjo de lavanda, que simboliza tranquilidade e serenidade." },
  { id: 19, nome: "Arranjo de Crysantemos", tipo: "Crysantemos", preco: 99.90, dataCriacao: "2025-01-11", disponibilidade: "Em estoque", descricao: "Arranjo de crisântemos, flores resistentes que transmitem a ideia de longevidade." },
  { id: 20, nome: "Arranjo de Begônias", tipo: "Begônias", preco: 89.00, dataCriacao: "2025-01-08", disponibilidade: "Em estoque", descricao: "Arranjo de begônias, flores delicadas com um toque sofisticado." },
  { id: 21, nome: "Arranjo de Azáleas", tipo: "Azáleas", preco: 99.90, dataCriacao: "2025-01-06", disponibilidade: "Em estoque", descricao: "Arranjo de azaléias, flores que simbolizam a beleza e a modéstia." },
  { id: 22, nome: "Arranjo de Peônias", tipo: "Peônias", preco: 149.90, dataCriacao: "2025-01-09", disponibilidade: "Em estoque", descricao: "Arranjo de peônias, flores que representam a riqueza e a honra." },
  { id: 23, nome: "Arranjo de Lírios Asiáticos", tipo: "Lírios", preco: 119.90, dataCriacao: "2025-01-07", disponibilidade: "Em estoque", descricao: "Arranjo de lírios asiáticos, flores exóticas que trazem um toque de elegância." },
  { id: 24, nome: "Arranjo de Camélias", tipo: "Camélias", preco: 109.90, dataCriacao: "2025-01-04", disponibilidade: "Em estoque", descricao: "Arranjo de camélias, flores que representam a perfeição e a beleza." },
  { id: 25, nome: "Arranjo de Magnólias", tipo: "Magnólias", preco: 139.90, dataCriacao: "2025-01-02", disponibilidade: "Em estoque", descricao: "Arranjo de magnólias, flores de aparência grandiosa que transmitem dignidade." },
  { id: 26, nome: "Arranjo de Dàlias", tipo: "Dálias", preco: 89.90, dataCriacao: "2025-01-03", disponibilidade: "Em estoque", descricao: "Arranjo de dálias, flores que simbolizam a elegância e a gratidão." },
  { id: 27, nome: "Arranjo de Íris", tipo: "Íris", preco: 79.90, dataCriacao: "2025-01-01", disponibilidade: "Em estoque", descricao: "Arranjo de íris, flores que representam a sabedoria e a fé." },
  { id: 28, nome: "Arranjo de Cravos Brancos", tipo: "Cravos", preco: 69.90, dataCriacao: "2025-01-25", disponibilidade: "Em estoque", descricao: "Arranjo de cravos brancos, simbolizando pureza e paz." },
  { id: 29, nome: "Arranjo de Lírios e Rosas", tipo: "Lírios, Rosas", preco: 119.90, dataCriacao: "2025-01-26", disponibilidade: "Em estoque", descricao: "Arranjo de lírios e rosas, perfeito para ocasiões românticas." },
  { id: 30, nome: "Arranjo de Narcisos", tipo: "Narcisos", preco: 89.00, dataCriacao: "2025-01-27", disponibilidade: "Em estoque", descricao: "Arranjo de narcisos, flores que simbolizam a renovação e o renascimento." },
  { id: 31, nome: "Arranjo de Amor-perfeito", tipo: "Amor-perfeito", preco: 69.90, dataCriacao: "2025-01-28", disponibilidade: "Em estoque", descricao: "Arranjo de amor-perfeito, flores que representam o amor fiel e verdadeiro." },
  { id: 32, nome: "Arranjo de Camomila", tipo: "Camomila", preco: 59.90, dataCriacao: "2025-01-29", disponibilidade: "Em estoque", descricao: "Arranjo de camomila, flores que transmitem serenidade e calmaria." },
  { id: 33, nome: "Arranjo de Azaléia Rosa", tipo: "Azaléia", preco: 70.00, dataCriacao: "2025-01-30", disponibilidade: "Em estoque", descricao: "Arranjo de azaléias rosas, simbolizando a modéstia e a beleza." }

];
>>>>>>> 802efc23ef68680fc2e06dd378f17d14aad5dd23

// Create a new flower arrangement
app.post('/arranjos', (req, res) => {
<<<<<<< HEAD
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

=======
    const { nome, tipo, preco, dataCriacao, disponibilidade, descricao } = req.body;
    
    if (!nome || !tipo || !preco || !dataCriacao || !disponibilidade || !descricao) {
        return res.status(400).json({ erro: 'Faltando dados obrigatórios!' });
    }

    const novoArranjo = {
        id: arranjos.length + 1, nome, tipo, preco, dataCriacao, disponibilidade, descricao };
>>>>>>> 802efc23ef68680fc2e06dd378f17d14aad5dd23
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
<<<<<<< HEAD
    const arranjo = arranjos.find(a => a.id === parseInt(id));

    if (!arranjo) {
        return res.status(404).json({ erro: 'Arranjo não encontrado.' });
    }

=======
    const arranjo = arranjos.find(u => u.id === parseInt(id));
    
    if (!arranjo) {
        return res.status(404).json({ erro: 'Arranjo não encontrado' });
    }
    
>>>>>>> 802efc23ef68680fc2e06dd378f17d14aad5dd23
    res.status(200).json(arranjo);
});

// Update a flower arrangement by ID
app.put('/arranjos/:id', (req, res) => {
    const { id } = req.params;
<<<<<<< HEAD
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
=======
    const { nome, tipo, preco, dataCriacao, disponibilidade, descricao } = req.body;
    
    let arranjo = arranjos.find(u => u.id === parseInt(id));
    
    if (!arranjo) {
        return res.status(404).json({ erro: 'Arranjo não encontrado' });
    }

    arranjo.nome = nome || arranjo.nome;
    arranjo.tipo = tipo || arranjo.tipo;
    arranjo.preco = preco || arranjo.preco;
    arranjo.dataCriacao = dataCriacao || arranjo.dataCriacao;
    arranjo.disponibilidade = disponibilidade || arranjo.disponibilidade;
    arranjo.descricao = descricao || arranjo.descricao;
>>>>>>> 802efc23ef68680fc2e06dd378f17d14aad5dd23

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
