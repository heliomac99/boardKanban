import db from '../database.js'

class ColunaController{
    constructor(){

    }
    index(req, res){
        var sql = "select * from coluna"
        var params = []
        db.all(sql, params, (err, rows) => {
            if (err) {
              res.status(400).json({mensagem:err.message});
              return;
            }
            res.send(rows)
        });
    }
    alteraCor(req, res){
        let sql = `UPDATE coluna SET cor = ? WHERE id = ?`
        let cor = req.body.cor
        let colunaId = req.body.colunaId

        db.run(sql, [cor, colunaId], function (err, result){
            if(err)
                res.status(500).send({mensagem: err.message});
            else{
                res.json("")
            }
        })
    }
    inserir(req, res){
        let sql = `INSERT INTO coluna (nome, ordem, boardId, cor) VALUES (?,?,?, ?)`
        let nome = req.body.nome
        let ordem = req.body.ordem
        let boardId = req.body.boardId
        let cor = req.body.cor

        db.run(sql, [nome, ordem, boardId, cor], function (err, result){
            if(err)
                res.status(500).send({mensagem: err.message});
            else{
                res.json("")
            }
        })
    }
    excluir(req, res){
        let sql = `DELETE from coluna WHERE id = ?`
        let deleteCards = `DELETE from card WHERE colunaId = ?`
        let id = req.body.id

        db.run(sql, [id], function (err){
            if(err)
                res.status(500).send({mensagem: err.message});
            else{
                db.run(deleteCards, [id], function (err){
                    if(err)
                        res.status(500).send({mensagem: err.message});
                    else{
                        res.json("")
                    }
                })
            }
        })
    }
    carregarRegistrosPorBoard(req, res){
        let sql = `select * from coluna where boardId = ? order by ordem`
        let boardId = req.body.boardId

        db.all(sql, [boardId], (err, rows) => {
            if (err) {
                res.status(500).send({mensagem: err.message});
            } else {
                res.status(200).send(rows);
            }
        });
    }

}

export default ColunaController