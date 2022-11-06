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

app.post("/listarBackLog", (req, res) => {
    var sql = "SELECT C.id as id, C.titulo as titulo, C.descricao as descricao, A.nome as nomeAutor from card C LEFT JOIN autor A on C.autorId = A.id where estagio = 1 "
    db.all(sql, [], (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "data":rows
        })
      });
});

app.post("/listarDesenvolvimento", (req, res) => {
    var sql = "SELECT C.id as id, C.titulo as titulo, C.descricao as descricao, A.nome as nomeAutor from card C LEFT JOIN autor A on C.autorId = A.id where estagio = 2"
    db.all(sql, [], (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "data":rows
        })
      });
});

app.post("/listarFinalizado", (req, res) => {
    var sql = "SELECT C.id as id, C.titulo as titulo, C.descricao as descricao, A.nome as nomeAutor from card C LEFT JOIN autor A on C.autorId = A.id where estagio = 3"
    db.all(sql, [], (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "data":rows
        })
      });
});

app.post("/moverCard", (req, res) => {
    let sql = "update card set estagio = ? where id = ?"
    let estagio = req.body.estagio
    let id = req.body.id

    db.all(sql, [estagio, id], (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json("")
      });
});

app.post('/card/add', (req, res) => {
    let sql = `INSERT INTO card (titulo, descricao, autorId, estagio) VALUES (?,?,?,?)`
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    let autorId = req.body.autorId
    let estagio = req.body.estagio

    db.run(sql, [titulo, descricao, autorId, estagio], function (err, result){
        if(err)
            throw err
        else{
            res.json("")
        }
    })
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
    let id = req.body.id
    db.run(sql, [id], function (err, result){
        if(err)
            throw err
        else{
            res.send("")
        }
    })
});

app.post('/autor/carregarRegistro', (req, res) => {
    let sql = `SELECT * FROM autor WHERE id = ?`
    let id = req.body.id
    db.all(sql, [id], (err, rows) => {
        console.log(rows)
        if (err) {
            console.error(err.message);
            res.status(500).send({message: err.message});
        } else {
            res.status(200).send(rows);
        }
    });
});
app.use(function(req, res){
    res.status(404);
});