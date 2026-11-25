const jogadores = [
    {
        nome: "Cristiano Ronaldo",
        posicao: "Atacante",
        Camisa: 7,
        salario: 1000000,
    },
    {
        nome: "João Barduchi",
        posicao: "Meio-campo",
        Camisa: 10,
        salario: 8000000,
    },
    {
        nome: "Vitor Roque",
        posicao: "Atacante",
        Camisa: 9,
        salario: 900000,
    },
    {
        nome: "Neymar Jr",
        posicao: "Atacante",
        Camisa: 11,
        salario: 1100000,
    },
    {
        nome: "Carlos Miguel",
        posicao: "Goleiro",
        Camisa: 1,
        salario: 700000,
    },
];

export const listarTodos = () => jogadores;

export const buscarPorCamisa = (camisa) =>
    jogadores.find((jogador) => jogador.Camisa === camisa);

export const buscarPorPosicao = (posicao) =>
    jogadores.filter(
        (jogador) => jogador.posicao.toLowerCase() === posicao.toLowerCase()
    );

export const buscarMaiorSalario = () =>
    jogadores.reduce((maior, jogador) =>
        jogador.salario > maior.salario ? jogador : maior
    );

export const criar = ({ nome, posicao, Camisa, salario }) => {
    if (jogadores.some((jogador) => jogador.Camisa === parseInt(Camisa))) {
        return null;
    }

    const novoJogador = {
        nome,
        posicao,
        Camisa: parseInt(Camisa),
        salario: parseFloat(salario),
    };

    jogadores.push(novoJogador);
    return novoJogador;
};

export const atualizar = (camisa, { nome, posicao, salario }) => {
    const index = jogadores.findIndex((jogador) => jogador.Camisa === camisa);
    if (index === -1) return null;

    jogadores[index] = {
        nome,
        posicao,
        Camisa: camisa,
        salario: parseFloat(salario),
    };

    return jogadores[index];
};

export const remover = (camisa) => {
    const index = jogadores.findIndex((jogador) => jogador.Camisa === camisa);
    if (index === -1) return null;

    const [jogadorRemovido] = jogadores.splice(index, 1);
    return jogadorRemovido;
};
