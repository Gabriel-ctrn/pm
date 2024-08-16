let usuarios = [
    {
        id: 1,
        nome: 'Joao',
        email: ""
    },
    {
        id: 2,
        nome: 'Joao2',
        email: ""
    },
    {
        id: 3,
        nome: 'Joao3',
        email: ""
    },
    {
        id: 4,
        nome: 'Joao4',
        email: ""
    },
]
export function listar(){
    return usuarios
}
export function buscarPorId(id){
    return usuarios.find(usuario => usuario.id == id)
}
export function criar(usuario){
    usuarios.push(usuario)
    return usuarios
}
export function deletar(id){
    usuarios = usuarios.filter(user => user.id !== parseInt(id))
    return usuarios
}
export function modificar(id, info){
    const mod = buscarPorId(id)
    const index = usuarios.indexOf(mod)
    usuarios[index] = info
    return usuarios
}

