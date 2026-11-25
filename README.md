# API de Jogadores

API REST de jogadores implementada com Express e organizada em Model, Controller e Routes. Os dados são armazenados em memória e são reiniciados quando o servidor para.

## Executar

```bash
npm start
```

O servidor inicia em `http://localhost:3000`.

## Endpoints

| Método | Caminho | Descrição |
| --- | --- | --- |
| GET | `/jogadores` | Lista todos os jogadores |
| GET | `/jogadores/camisa/:camisa` | Busca um jogador pelo número da camisa |
| GET | `/jogadores/posicao/:posicao` | Lista jogadores por posição |
| GET | `/jogadores/maiorsalario` | Retorna o jogador com maior salário |
| POST | `/jogadores` | Cadastra um jogador |
| PUT | `/jogadores/:camisa` | Atualiza nome, posição e salário do jogador |
| DELETE | `/jogadores/:camisa` | Remove um jogador |

O corpo do POST deve conter `nome`, `posicao`, `Camisa` e `salario`. O PUT recebe `nome`, `posicao` e `salario`.

Os arquivos `app_monolitico.js` e `jogadores_mono.js` mantêm a versão anterior para comparação. Para executar essa versão, use `node app_monolitico.js` em vez de `npm start`.
