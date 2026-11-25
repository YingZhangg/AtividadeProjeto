import express from 'express';
import {jogador } from './jogadores_mono.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/jogadores', (req, res) => {
    res.status(200).json(jogador);
});

app.get('/jogadores/camisa/:camisa', (req, res) => {
    const camisa = req.params.camisa;
    const jogadorEncontrado = jogador.find(j => j.Camisa === parseInt(camisa));
    if (jogadorEncontrado) {
        res.status(200).json(jogadorEncontrado);
    } else {
        res.status(404).json({ message: "Jogador não encontrado" });
    }
});

app.get('/jogadores/posicao/:posicao', (req, res) => {
    const posicao = req.params.posicao;
    const jogadoresEncontrados = jogador.filter(j => j.posicao.toLowerCase() === posicao.toLowerCase());
    if (jogadoresEncontrados.length > 0) {
        res.status(200).json(jogadoresEncontrados);
    } else {
        res.status(404).json({ message: "Jogadores não encontrados" });
    }
});

app.get('/jogadores/maiorsalario', (req, res) => {
    let maiorSalario = jogador[0];

    for (const palmeiras of jogador) {
        if (palmeiras.salario > maiorSalario.salario) {
            maiorSalario = palmeiras;
        }
    }
    res.status(200).json(maiorSalario);
});

app.post('/jogadores', (req, res) => {
    const { nome, posicao, Camisa, salario } = req.body;

    if (!nome || !posicao || Camisa === undefined || salario === undefined) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }
if (jogador.some(j => j.Camisa === parseInt(Camisa))) {
        return res.status(400).json({ message: "Já existe um jogador com essa camisa" });
    }

    const novoJogador = {
         nome, 
         posicao, 
         Camisa: parseInt(Camisa),
          salario: parseFloat(salario) };
    jogador.push(novoJogador);
    res.status(201).json(novoJogador);
});

app.put('/jogadores/:camisa', (req, res) => {
    const camisa = parseInt(req.params.camisa);
    const { nome, posicao, salario } = req.body;

    const index = jogador.findIndex(j => j.Camisa === camisa);
    if (index === -1){
        return res.status(404).json({ message: "Jogador não encontrado" 
        });
    }
    jogador[index] = {
        nome,
        posicao,
        camisa,
        salario
    };
    res.status(200).json(jogador[index]);
});

app.delete('/jogadores/:camisa', (req, res) => {
    const camisa = parseInt(req.params.camisa);
    const index = jogador.findIndex(j => j.Camisa === camisa);
   
    if (index === -1) {
        return res.status(404).json({ 
            message: "Jogador não encontrado" 
        });
    }
    const jogadorRemovido = jogador.splice[index];
    res.status(200).json({ 
        message: "Jogador removido com sucesso"
     });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
}); 