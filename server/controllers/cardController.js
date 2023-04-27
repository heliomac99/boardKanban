import db from '../database.js'

class CardController{
    constructor(){

    }
    index(req, res){
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
    }
    inserir(req, res){
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
    }   
    editar(req, res){
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
    }
    excluir(req, res){
        let sql = `DELETE from card WHERE id = ?`
        let id = req.body.id

        db.run(sql, [id], function (err, result){
            if(err)
                throw err
            else{
                res.json("")
            }
        })
    }
    carregarRegistro(req, res){
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
    }
    mover(req, res){
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
    }
    
}

export default CardController