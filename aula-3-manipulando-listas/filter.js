//importando apenas uma função de um objeto inteiro do módulo.
const { obterPokemon } = require('./service-pokemon');

Array.prototype.meuFilter = function (callback) {

    const arrayFiltrado = [];

    for(index in this){
        const item = this[index];
        const resultado = callback(item, index, this);
        if(!resultado) continue;
        arrayFiltrado.push(item);
    }

    return arrayFiltrado;
}


async function main() {

    try {

        const pokemon = await obterPokemon('charmander');
        const abilitiesNotHidden = pokemon.abilities.filter(it => it.is_hidden === true);

        const abilitiesNames = abilitiesNotHidden.map(it => it.ability.name);

        console.log('As habilidades que não são escondidas', abilitiesNotHidden);
        console.log('O nome das habilidades que não são escondidas', abilitiesNames);

        const abilitiesHidden = pokemon.abilities.meuFilter(it => it.is_hidden === false);
        
        console.log('Utilizando filtro criado', abilitiesHidden);

    } catch (error) {
        console.log('deu ruim', error);
    }

}

main();