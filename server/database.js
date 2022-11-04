var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE IF NOT EXISTS card (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo text NOT NULL, 
            descricao text,
            autorId INTEGER,
            estagio int NOT NULL,
            FOREIGN KEY (autorId) REFERENCES Persons(id)
            )`,
        );

        db.run(`CREATE TABLE IF NOT EXISTS Autor (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome text,
            email text UNIQUE
        )`); 
    }
});


module.exports = db