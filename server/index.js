// Create express app
var express = require("express")
var db = require("./database.js")
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const sqlite3 = require('sqlite3');


const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
var HTTP_PORT = 8000 

app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

app.get("/card", (req, res, next) => {
    var sql = "select * from card"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "data":rows
        })
      });
});

app.post("/autor", (req, res, next) => {
    var sql = "select * from autor"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.send(rows)
      });
});

app.get("/usuario", (req, res, next) => {
    var sql = "select * from usuario"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "data":rows
        })
      });
});

// app.post("/listarBackLog", (req, res) => {
//     var sql = "SELECT C.id as id, C.titulo as titulo, C.descricao as descricao, A.nome as nomeAutor, C.autorId as autorId from card C LEFT JOIN autor A on C.autorId = A.id where estagio = 1 "
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//           res.status(400).json({"error":err.message});
//           return;
//         }
//         res.json({
//             "data":rows
//         })
//       });
// });

// app.post("/listarDesenvolvimento", (req, res) => {
//     var sql = "SELECT C.id as id, C.titulo as titulo, C.descricao as descricao, A.nome as nomeAutor, C.autorId as autorId from card C LEFT JOIN autor A on C.autorId = A.id where estagio = 2"
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//           res.status(400).json({"error":err.message});
//           return;
//         }
//         res.json({
//             "data":rows
//         })
//       });
// });

// app.post("/listarFinalizado", (req, res) => {
//     var sql = "SELECT C.id as id, C.titulo as titulo, C.descricao as descricao, A.nome as nomeAutor, C.autorId as autorId from card C LEFT JOIN autor A on C.autorId = A.id where estagio = 3"
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//           res.status(400).json({"error":err.message});
//           return;
//         }
//         res.json({
//             "data":rows
//         })
//       });
// });

app.post("/moverCard", (req, res) => {
    let sql = "update card set colunaId = ? where id = ?"
    let colunaId = req.body.colunaId
    let id = req.body.id

    db.all(sql, [colunaId, id], (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json("")
      });
});

app.post('/card/add', (req, res) => {
    let sql = `INSERT INTO card (titulo, descricao, autorId, colunaId) VALUES (?,?,?,?)`
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    let autorId = req.body.autorId
    let colunaId = req.body.colunaId

    db.run(sql, [titulo, descricao, autorId, colunaId], function (err, result){
        if(err)
            throw err
        else{
            res.json("")
        }
    })
});

app.post('/card/edit', (req, res) => {
    let sql = `UPDATE card SET titulo = ?, descricao = ?, autorId = ? WHERE id = ?`
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    let autorId = req.body.autorId
    let id = req.body.id

    db.run(sql, [titulo, descricao, autorId, id], function (err, result){
        if(err)
            throw err
        else{
            res.json("")
        }
    })
});

app.post('/card/delete', (req, res) => {
    let sql = `DELETE from card WHERE id = ?`
    let id = req.body.id

    db.run(sql, [id], function (err, result){
        if(err)
            throw err
        else{
            res.json("")
        }
    })
});

app.post('/card/carregarRegistro', (req, res) => {
    let sql = `SELECT * FROM card WHERE id = ?`
    let id = req.body.id
    db.all(sql, [id], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send({message: err.message});
        } else {
            res.status(200).send(rows);
        }
    });
});

app.post('/autor/add', (req, res) => {
    let sqlEmail = `SELECT * FROM autor Where email = ?`
    let sqlUpdate = `INSERT INTO autor (nome, email) VALUES (?,?)`
    let nome = req.body.nome
    let email = req.body.email

    db.all(sqlEmail, [email], (err, rows) => {
        if(err)
            throw err
        else{
            if(rows.length > 0){
                res.send({emailValido: false})
                return;
            }
            db.run(sqlUpdate, [nome, email], (err) => {
                if (err) {
                    res.status(500).send({ message: err.message });
                } else {
                    res.status(200).send({ emailValido: true });
                }
            });
            
        }
    })
});

app.post('/autor/update', (req, res) => {
    let sql = `UPDATE autor SET nome = ?, email = ? WHERE id = ?`
    let id = req.body.id
    let nome = req.body.nome
    let email = req.body.email
    db.run(sql, [nome, email, id], function (err, result){
        if(err)
            throw err
        else{
            res.json("")
        }
    })
});

app.post('/autor/delete', (req, res) => {
    let sql = `DELETE FROM autor WHERE id = ?`
    let sqlCard = `SELECT * from card WHERE autorId = ?`
    let id = req.body.id

    db.all(sqlCard,[id], (err, rows) =>{
        if(err)
            throw err
        else{
            if(rows.length > 0){
                res.send({ podeExcluir: false })
                return; 
            }
            db.run(sql, [id], function (err, result){
                if(err)
                    throw err
                else{
                    res.send({ podeExcluir: true })
                }
            })
        }
    })
});

app.post('/autor/carregarRegistro', (req, res) => {
    let sql = `SELECT * FROM autor WHERE id = ?`
    let id = req.body.id
    db.all(sql, [id], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send({message: err.message});
        } else {
            res.status(200).send(rows);
        }
    });
});

app.post("/board", (req, res, next) => {
    var sql = "select * from board"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.send(rows)
      });
});

app.post('/board/add', (req, res) => {
    let sql = `INSERT INTO board (nome) VALUES (?)`
    let nome = req.body.nome

    db.run(sql, [nome], function (err, result){
        if(err)
            throw err
        else{
            res.json("")
        }
    })
});

app.post('/board/update', (req, res) => {
    let sql = `UPDATE board SET nome = ? WHERE id = ?`
    let id = req.body.id
    let nome = req.body.nome
    db.run(sql, [nome, id], function (err, result){
        if(err)
            throw err
        else{
            res.json("")
        }
    })
});

app.post('/board/delete', (req, res) => {
    let sql = `DELETE from board WHERE id = ?`
    let id = req.body.id

    db.run(sql, [id], function (err, result){
        if(err)
            throw err
        else{
            res.json("")
        }
    })
});

app.post('/board/carregarRegistro', (req, res) => {
    let sql = `SELECT * FROM board WHERE id = ?`
    let id = req.body.id
    db.all(sql, [id], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send({message: err.message});
        } else {
            res.status(200).send(rows);
        }
    });
});


app.post('/coluna/add', (req, res) => {
    let sql = `INSERT INTO coluna (nome, ordem, boardId, cor) VALUES (?,?,?, ?)`
    let nome = req.body.nome
    let ordem = req.body.ordem
    let boardId = req.body.boardId
    let cor = req.body.cor

    db.run(sql, [nome, ordem, boardId, cor], function (err, result){
        if(err)
            throw err
        else{
            res.json("")
        }
    })
});

app.post('/coluna/alteraCor', (req, res) => {
    let sql = `UPDATE coluna SET cor = ? WHERE id = ?`
    let cor = req.body.cor
    let colunaId = req.body.colunaId

    db.run(sql, [cor, colunaId], function (err, result){
        if(err)
            throw err
        else{
            res.json("")
        }
    })
});

app.post("/coluna", (req, res, next) => {
    var sql = "select * from coluna"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.send(rows)
      });
});

app.post('/coluna/delete', (req, res) => {
    let sql = `DELETE from coluna WHERE id = ?`
    let deleteCards = `DELETE from card WHERE colunaId = ?`
    let id = req.body.id

    db.run(sql, [id], function (err){
        if(err)
            throw err
        else{
            db.run(deleteCards, [id], function (err){
                if(err)
                    throw err
                else{
                    res.json("")
                }
            })
        }
    })
});

app.post("/coluna/carregarPorBoard", (req, res) => {
    let sql = `select * from coluna where boardId = ? order by ordem`
    let boardId = req.body.boardId

    db.all(sql, [boardId], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send({message: err.message});
        } else {
            res.status(200).send(rows);
        }
    });
});


app.post("/board/carregarBoard", (req, res) => {
    var sql = "select c1.id as id, c1.boardId as boardId, c1.nome as nome, c1.ordem as ordem, c1.cor as cor, c2.id as cardId, c2.titulo as titulo, c2.descricao as descricao, c2.autorId as autorId, a.nome as nomeAutor from coluna c1 LEFT JOIN card c2 on c1.id = c2.colunaId LEFT JOIN autor a on c2.autorId = a.id  WHERE c1.boardId = ? ORDER BY c1.ordem"
    let boardId = req.body.boardId
    let result = []

    db.all(sql, [boardId], (err, rows) => {
        result = rows
        
        let uniqueColunms = []
        var aux = 0

        result.forEach(element => {
            if(element.id != aux){
                aux = element.id
                uniqueColunms.push({"id": element.id, "boardId": element.boardId, "nome": element.nome, "ordem": element.ordem, "cor": element.cor})
            }
        })
        
        uniqueColunms.forEach( element => {
            element.cards = []
            result.forEach( element2 => {
                if(element.id == element2.id){
                    if(element2.cardId > 0)
                        element.cards.push({"id": element2.cardId, "titulo": element2.titulo, "descricao": element2.descricao, "autorId": element2.autorId, "nomeAutor": element2.nomeAutor })
                    else
                        return
                }
            })
        })

        res.send(uniqueColunms)
        
    })
})

app.post('/usuario/add', (req, res) => {
    let sql = `INSERT INTO usuario (login, nome, senha) VALUES (?,?,?)`
    let nome = req.body.nome
    let login = req.body.login
    let senha = req.body.senha

    db.run(sql, [login, nome, senha], function (err, result){
        if(err)
            throw err
        else{
            res.json("")
        }
    })
});

app.post('/usuario/validar', (req, res) => {
    let sql = `SELECT * from usuario where login = ? and senha = ?`
    let login = req.body.login
    let senha = req.body.senha

    db.all(sql, [login, senha], function (err, rows){
        if(err)
            throw err
        else{
            if(rows.length > 0)
                res.json({valido: true, usuario: rows[0]})
            else
                res.json({valido: false, usuario: null})
        }
    })
});

app.use(function(req, res){
    res.status(404);
});


