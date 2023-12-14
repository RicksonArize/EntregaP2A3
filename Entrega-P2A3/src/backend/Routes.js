// Routes.js
import { Router } from "express";

import { 
  createJogoTable,
  insertJogo, updateJogo, selectJogos, selectJogo, deleteJogo 
} from './Controler/jogo.js';

import { 
  createPlataformaTable,
  insertPlataforma, updatePlataforma, selectPlataformas, selectPlataforma, deletePlataforma 
} from './Controler/plataformas.js';

import { 
  createCategoriaTable,
  insertCategoria, updateCategoria, selectCategorias, selectCategoria, deleteCategoria 
} from './Controler/categorias.js';

import { 
  createStatusTable,
  insertStatu, updateStatu, selectStatus, selectStatu, deleteStatu 
} from './Controler/status.js';

import { 
  createNotaTable,
  insertNota, updateNota, selectNotas, selectNota, deleteNota 
} from './Controler/notas.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    });
});


// Rotas para jogo
router.get('/createJogoTable', createJogoTable);
router.get('/jogos', selectJogos);
router.get('/jogo/:id', selectJogo);
router.post('/jogo', insertJogo);
router.put('/jogo/:id', updateJogo);
router.delete('/jogo/:id', deleteJogo);

// Rotas para plataforma
router.get('/createPlataformaTable', createPlataformaTable);
router.get('/plataformas', selectPlataformas);
router.get('/plataforma/:id', selectPlataforma);
router.post('/plataforma', insertPlataforma);
router.put('/plataforma/:id', updatePlataforma);
router.delete('/plataforma/:id', deletePlataforma);


router.get('/createCategoriaTable', createCategoriaTable);
router.get('/categorias', selectCategorias);
router.get('/categoria/:id', selectCategoria);
router.post('/categoria', insertCategoria);
router.put('/categoria/:id', updateCategoria);
router.delete('/categoria/:id', deleteCategoria);

router.get('/createNotaTable', createNotaTable);
router.get('/notas', selectNotas);
router.get('/nota/:id', selectNota);
router.post('/nota', insertNota);
router.put('/nota/:id', updateNota);
router.delete('/nota/:id', deleteNota);

router.get('/createStatusTable', createStatusTable);
router.get('/status', selectStatus);
router.get('/statu/:id', selectStatu);
router.post('/statu', insertStatu);
router.put('/statu/:id', updateStatu);
router.delete('/statu/:id', deleteStatu);

export default router;
