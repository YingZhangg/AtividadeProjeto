import { Router } from 'express';
import {
    getJogadores,
    getJogadorPorCamisa,
    getJogadoresPorPosicao,
    getMaiorSalario,
    postJogador,
    putJogador,
    deleteJogador,
} from '../controllers/jogadorController.js';

const router = Router();

router.get('/', getJogadores);
router.get('/camisa/:camisa', getJogadorPorCamisa);
router.get('/posicao/:posicao', getJogadoresPorPosicao);
router.get('/maiorsalario', getMaiorSalario);
router.post('/', postJogador);
router.put('/:camisa', putJogador);
router.delete('/:camisa', deleteJogador);

export default router;
