import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import UsuarioController from './controllers/usuarioController.js';
import CardController from './controllers/cardController.js';
import BoardController from './controllers/boardController.js';
import ColunaController from './controllers/colunaController.js';
import AutorController from './controllers/autorController.js';

const usuarioController = new UsuarioController
const cardController = new CardController
const boardController = new BoardController
const colunaController = new ColunaController
const autorController = new AutorController

const app = express();

app.use(cors());
app.use(bodyParser.json());
var HTTP_PORT = 8000 

app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});


app.post("/autor", autorController.index);
app.post("/autorPorUsuario", autorController.carregarRegistrosPorUsuario);
app.post('/autor/add', autorController.inserir);
app.post('/autor/update', autorController.editar);
app.post('/autor/delete', autorController.excluir);
app.post('/autor/carregarRegistro', autorController.carregarRegistro);

app.post('/coluna/add', colunaController.inserir);
app.post('/coluna/alteraCor', colunaController.alteraCor);
app.post("/coluna", colunaController.index);
app.post('/coluna/delete', colunaController.excluir);
app.post("/coluna/carregarPorBoard", colunaController.carregarRegistrosPorBoard);

app.post('/usuario/add', usuarioController.inserir)
app.post('/usuario/validar', usuarioController.login);
app.get("/usuario", usuarioController.index);

app.get("/card", cardController.index );
app.post('/card/add', cardController.inserir);
app.post('/card/edit', cardController.editar);
app.post('/card/delete', cardController.excluir);
app.post('/card/carregarRegistro', cardController.carregarRegistro);
app.post("/moverCard", cardController.mover);

app.post("/board", boardController.index);
app.post("/boardPorUsuario", boardController.carregarRegistrosPorUsuario);
app.post('/board/add', boardController.inserir);
app.post('/board/update', boardController.editar);
app.post('/board/delete', boardController.excluir);
app.post('/board/carregarRegistro', boardController.carregarRegistro);
app.post("/board/carregarBoard", boardController.carregarBoardCompleto)

app.use(function(req, res){
    res.status(404);
});


