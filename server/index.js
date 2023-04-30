import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import UsuarioController from './controllers/usuarioController.js';
import CardController from './controllers/cardController.js';
import BoardController from './controllers/boardController.js';
import ColunaController from './controllers/colunaController.js';
import AutorController from './controllers/autorController.js';
import jwt from'jsonwebtoken'
import morgan from 'morgan';

const usuarioController = new UsuarioController
const cardController = new CardController
const boardController = new BoardController
const colunaController = new ColunaController
const autorController = new AutorController

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'))

var HTTP_PORT = 8000 

app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

function validaJWT(req, res, next){
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ valido: false, mensagem: 'Sua sessão expirou.' });
    
    jwt.verify(token, 'f9bf78b9a18ce6d46a0cd2b0b86df9da', function(err) {
      if (err) return res.status(401).json({ valido: false, mensagem: 'Sua sessão expirou.' });

      next();
    });
}

app.post("/autor", validaJWT, autorController.index);
app.post("/autorPorUsuario", validaJWT, autorController.carregarRegistrosPorUsuario);
app.post('/autor/add', validaJWT, autorController.inserir);
app.post('/autor/update', validaJWT, autorController.editar);
app.post('/autor/delete', validaJWT, autorController.excluir);
app.post('/autor/carregarRegistro', validaJWT, autorController.carregarRegistro);

app.post('/coluna/add', validaJWT,colunaController.inserir);
app.post('/coluna/alteraCor', validaJWT,colunaController.alteraCor);
app.post("/coluna", validaJWT,colunaController.index);
app.post('/coluna/delete', validaJWT,colunaController.excluir);
app.post("/coluna/carregarPorBoard", validaJWT,colunaController.carregarRegistrosPorBoard);

app.post('/usuario/add', usuarioController.inserir)
app.post('/usuario/validar', usuarioController.login);
app.get("/usuario", validaJWT, usuarioController.index);

app.get("/card", validaJWT, cardController.index );
app.post('/card/add', validaJWT, cardController.inserir);
app.post('/card/edit', validaJWT, cardController.editar);
app.post('/card/delete', validaJWT, cardController.excluir);
app.post('/card/carregarRegistro', validaJWT, cardController.carregarRegistro);
app.post("/moverCard", validaJWT, cardController.mover);

app.post("/board", validaJWT,boardController.index);
app.post("/boardPorUsuario",validaJWT, boardController.carregarRegistrosPorUsuario);
app.post('/board/add', validaJWT, boardController.inserir);
app.post('/board/update', validaJWT, boardController.editar);
app.post('/board/delete', validaJWT, boardController.excluir);
app.post('/board/carregarRegistro', validaJWT, boardController.carregarRegistro);
app.post("/board/carregarBoard", validaJWT, boardController.carregarBoardCompleto)

app.use(function(req, res){
    res.status(404);
});


