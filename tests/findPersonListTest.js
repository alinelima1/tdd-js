const should = require('should');
const findPerson = require('../js/app')

describe('Find Person', () => {
    it('soma person', () => {
        findPerson.somaPerson(2,3).should.be.equal(5);
    })
    it('deve somar dois números e retornar 30', () => {
        findPerson.somaPerson(10,20).should.be.equal(30);
    })
    it('Passar um nome e deve retornar a mensagem de pessoa não encontrada', () => {
        findPerson.encontraPerson('Marta Mendes').should.be.equal('Pessoa não encontrada');
    })
    it('Retorna mensagem que nome é obrigatório.' , () => {
        findPerson.encontraPerson().should.be.equal('Campo nome está vazio.');
    })
    it('Retorna que tipo do parâmetro é inválido', () => {
        findPerson.encontraPerson(1).should.be.equal('Tipo de parâmetro é inválido.');
    })
    it('Deve retornar um nome da lista.', () => {
        findPerson.encontraPerson('Pessoa Teste').should.be.equal('Pessoa Teste');
    })
})