import { openDB } from "../configDB.js";

export async function createTable(){
    openDB().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Investimentos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL,data_aplicacao DATE NOT NULL, data_vencimento DATE, valor DOUBLE NOT NULL, data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL)')
    });
}

export async function selectInvestimento(req, res){
    let id = req.body.id;
    openDB().then(db=>{
        db.get('SELECT * FROM Investimentos WHERE id=?',id)
        .then(investimento => res.json(investimento));
    });
}

export async function selectInvestimentos(req, res){
    openDB().then(db=>{
            db.all('SELECT * FROM Investimentos')
            .then(investimentos => res.json(investimentos));
    });
}

export async function insertInvestimento(req, res){
    let investimento = req.body;    
    openDB().then(db=>{
        db.run('INSERT INTO Investimentos (nome, data_aplicacao, data_vencimento, valor) VALUES (?,?,?,?)', [investimento.nome, investimento.data_aplicacao, investimento.data_vencimento, investimento.valor])
    });
    res.json({
        "statusCode" : 200
    });
}

export async function updateInvestimento(req, res){
    let investimento = req.body;
    openDB().then(db=>{
        db.run('UPDATE Investimentos SET nome=?, data_aplicacao=?, data_vencimento=?, valor=? WHERE id=?', [investimento.nome, investimento.data_aplicacao, investimento.data_vencimento, investimento.valor, investimento.id])
    });
    res.json({
        "statusCode" : 200
    });
}

export async function deleteInvestimento(req, res){
    let id = req.body.id;   
    openDB().then(db=>{
            db.get('DELETE FROM Investimentos WHERE id=?',[id])
            .then(res=>res);
    });
    res.json({
        "statusCode" : 200
    });
}