import db from '../database.js'
import index from '../index.js'

class AutorController{
    constructor(){

    }
    index(req, res){
        var sql = "select * from autor"
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
        var sql = "select * from autor where usuarioId = ?"
        var usuarioId = index.usuarioId()

        db.all(sql, [usuarioId], (err, rows) => {
            if (err) {
            res.status(400).json({"error":err.message});
            return;
            }
            res.send(rows)
        });
    }
    inserir(req, res){
        let sqlEmail = `SELECT * FROM autor Where email = ? and usuarioId = ?`
        let sqlAdd = `INSERT INTO autor (nome, email, usuarioId) VALUES (?,?,?)`
        let nome = req.body.nome
        let email = req.body.email
        let usuarioId = index.usuarioId()
        
        db.all(sqlEmail, [email, usuarioId], (err, rows) => {
            if(err)
                throw err    
            else{
                if(rows.length > 0){
                    res.send({emailValido: false})
                    return;
                }
                db.run(sqlAdd, [nome, email, usuarioId], (err) => {
                    if (err) {
                        res.status(500).send({ message: err.message });
                    } else {
                        res.status(200).send({ emailValido: true });
                    }
                });
                
            }
        })
    }
    editar(req, res){
        let sqlEmail = `SELECT * FROM autor Where email = ? and usuarioId = ? and id != ?`
        let sql = `UPDATE autor SET nome = ?, email = ?, usuarioId = ? WHERE id = ?`
        let id = req.body.id
        let nome = req.body.nome
        let email = req.body.email
        let usuarioId = index.usuarioId()

        db.all(sqlEmail, [email, usuarioId, id], (err, rows) => {
            if(err)
                throw err
            else{
                if(rows.length > 0){
                    res.send({emailValido: false})
                    return;
                }
                db.run(sql, [nome, email, usuarioId, id], function (err, result){
                    if(err)
                        throw err
                    else{
                        res.json("")
                    }
                })
                
            }
        })
    }
    excluir(req, res){
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
    }
    carregarRegistro(req, res){
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
    }
}

export default AutorController