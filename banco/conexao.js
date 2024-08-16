import { query } from "express";
import mysql from "mysql2";

class Conexao {
    constructor() {
        if (!Conexao.instance) {
            this.connection = mysql.createConnection({
                host: "localhost",
                user: "dev",//root
                password: ""//univasf | 
            });
            this.connection.connect((err) => {
                if (err) throw err
                console.log("CONECTAFP  AO BANCO DE DADOS")
            });
            Conexao.instance = this
        }
        return Conexao.instance
    }
    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, results) => {
                if (err) return reject(err)
                resolve(results)
            })
        })
    }
}
const instance = new Conexao()
object.freeze(instance)

instance.query("CREATE DATABASE IF NOT EXISTS teste")
instance.query("USE teste")

export default instance
