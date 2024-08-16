import instance from "../banco/conexao.js"

export async function listar(){
    return instance.query("select from usuarioos")
}
export async 