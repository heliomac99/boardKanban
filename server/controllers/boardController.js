import db from '../database.js'

class BoardController{
    constructor(){

    }
    index(req, res){
        var sql = "select * from board"
        var params = []
        db.all(sql, params, (err, rows) => {
            if (err) {
            res.status(400).json({"error":err.message});
            return;
            }
            res.send(rows)
        });
    }
    carregarRegistrosPorUsuario(req, res){
        var sql = "select * from board where usuarioId = ?"
        var usuarioId = req.body.usuarioId
        
        db.all(sql, [usuarioId], (err, rows) => {
            if (err) {
            res.status(400).json({"error":err.message});
            return;
            }
            res.send(rows)
        });
    }
    inserir(req, res){
        let sql = `INSERT INTO board (nome, usuarioId) VALUES (?,?)`
        let nome = req.body.nome
        let usuarioId = req.body.usuarioId

        db.run(sql, [nome, usuarioId], function (err, result){
            if(err)
                throw err
            else{
                res.json("")
            }
        })
    }
    editar(req, res){
        let sql = `UPDATE board SET nome = ?, usuarioId = ? WHERE id = ?`
        let id = req.body.id
        let usuarioId = req.body.usuarioId
        let nome = req.body.nome
        db.run(sql, [nome, usuarioId, id], function (err, result){
            if(err)
                throw err
            else{
                res.json("")
            }
        })
    }
    excluir(req, res, next){
        let sql = `DELETE from board WHERE id = ?`
        let selectColunas = `SELECT * from coluna where boardId = ?`
        let deleteColunas = `DELETE from coluna where boardId = ?`
        let deleteCards = `DELETE from card WHERE colunaId = ?`
        let id = req.body.id

        db.run(sql, [id], function (err, result){
            if(err)
                throw err
            else{
                db.all(selectColunas, [id], (err, rows) => {
                    if (err) {
                        console.log(err)
                        res.status(500).send({message: err.message});
                    } else {
                        rows.forEach(element => {
                            db.run(deleteCards, [element.id], function (err){
                                if(err)
                                    res.status(500).send({mensagem: err.message});
                                else{
                                    db.run(deleteColunas, [id], function (err){
                                        if(err)
                                            res.status(500).send({mensagem: err.message});
                                    })
                                }
                            })
                        })
                        res.json("")

                    }
                });
            }
        })
    }
    carregarRegistro(req, res){
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
    }
    carregarBoardCompleto(req, res){
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
    }

}

export default BoardController