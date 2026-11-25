import express from 'express';
import jogadorRoutes from './routes/jogadorRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/jogadores', jogadorRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
