const assert = require('assert');
const service = require('../aula-3-manipulando-listas/service-pokemon');
const nock = require('nock');

describe('Pokemon testes', () => {

    before(() => {
        const response = {
            forms: [
                {
                    name: 'charmander'
                }
            ]
        };

        nock('https://pokeapi.co/api/v2/pokemon')
        .get('/charmander')
        .reply(200, response);


    });

    it('Deve buscar o charmander com o formato correto', async () => {

        const expectedName = 'charmander';

        const pokemon = await service.obterPokemon('charmander');

        assert.deepStrictEqual(pokemon.forms[0].name, expectedName);

    });
});