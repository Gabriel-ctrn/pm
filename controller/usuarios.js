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
export function BuscarPorId(id){
    return usuarios.find(usuario => usuario.id == id)
}