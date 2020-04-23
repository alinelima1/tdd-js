const somaPerson = (n1, n2) => n1 + n2;

const person = [
    'Pessoa Teste',
    'José Silva',
    'Maria das Dores'
]

const encontraPerson = (param) => {
    try{
        validacao(param);
        const pessoaEncontrada = person.find(nome => nome === param);
        return pessoaEncontrada ? pessoaEncontrada : 'Pessoa não encontrada';
    }catch(err){
        return err;
    }
}

const validacao = (param) => {
    if(!param) throw 'Campo nome está vazio.';
    if(typeof param !== 'string') throw 'Tipo de parâmetro é inválido.';
}

module.exports = {
    somaPerson,
    encontraPerson
}