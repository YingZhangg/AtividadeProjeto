import * as JogadorModel from '../models/jogadorModel.js';

export const getJogadores = (req, res) => {
    res.status(200).json(JogadorModel.listarTodos());
};

export const getJogadorPorCamisa = (req, res) => {
    const camisa = parseInt(req.params.camisa);
    const jogador = JogadorModel.buscarPorCamisa(camisa);

    if (!jogador) {
        return res.status(404).json({ message: "Jogador não encontrado" });
    }

    res.status(200).json(jogador);
};

export const getJogadoresPorPosicao = (req, res) => {
    const jogadores = JogadorModel.buscarPorPosicao(req.params.posicao);

    if (jogadores.length === 0) {
        return res.status(404).json({ message: "Jogadores não encontrados" });
    }

    res.status(200).json(jogadores);
};

export const getMaiorSalario = (req, res) => {
    res.status(200).json(JogadorModel.buscarMaiorSalario());
};

export const postJogador = (req, res) => {
    const { nome, posicao, Camisa, salario } = req.body;

    if (!nome || !posicao || Camisa === undefined || salario === undefined) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    const novoJogador = JogadorModel.criar({ nome, posicao, Camisa, salario });
    if (!novoJogador) {
        return res.status(400).json({ message: "Já existe um jogador com essa camisa" });
    }

    res.status(201).json(novoJogador);
};

export const putJogador = (req, res) => {
    const camisa = parseInt(req.params.camisa);
    const { nome, posicao, salario } = req.body;

    if (!nome || !posicao || salario === undefined) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    const jogadorAtualizado = JogadorModel.atualizar(camisa, { nome, posicao, salario });
    if (!jogadorAtualizado) {
        return res.status(404).json({ message: "Jogador não encontrado" });
    }

    res.status(200).json(jogadorAtualizado);
};

export const deleteJogador = (req, res) => {
    const camisa = parseInt(req.params.camisa);
    const jogadorRemovido = JogadorModel.remover(camisa);

    if (!jogadorRemovido) {
        return res.status(404).json({ message: "Jogador não encontrado" });
    }

    res.status(200).json({ message: "Jogador removido com sucesso" });
};
