import db from '../database.js'

class UsuarioController{
    constructor(){

    }
    index(req, res){
        var sql = "select * from usuario"
        var params = []
        db.all(sql, params, (err, rows) => {
            if (err) {
                res.status(400).json({"error":err.message});
                return;
            }
            res.json({"data":rows })
       });
    }
    inserir(req, res){
        let validacao = `SELECT * FROM usuario where login = ?`
        let sql = `INSERT INTO usuario (login, nome, senha) VALUES (?,?,?)`
        let nome = req.body.nome
        let login = req.body.login
        let senha = req.body.senha
     
        db.all(validacao, [login], function (err, result){
            if(err)
                throw err
            else{
                if(result.length > 0)
                    res.json({valido: false})
                else{
                    db.run(sql, [login, nome, senha], function (err, result){
                        if(err)
                            throw err
                        else{
                            res.json({valido: true})
                        }
                    })
                }
            }
        })    
    }
    login(req, res){
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
    }
}

export default UsuarioController