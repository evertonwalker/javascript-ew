const service = require('./service-pokemon');

//Exemplo de implementação de um map por baixo dos panos.
Array.prototype.meuMap = function (callback) {

    const novoArrayMapeado = [];

    for(let indice = 0; indice <= this.length - 1; indice++) {
            const resultado = callback(this[indice], indice);
        novoArrayMapeado.push(resultado);
    }

    return novoArrayMapeado;

}

async function main() {
    try {

        const pokemon = await service.obterPokemon('charmander');

        //const abilitiesName  = [];
        // Maneira de fazer com forEach
        // pokemon.abilities.forEach(it => {
        //     abilitiesName.push(it.ability.name);
        // });

        // const abilitiesName = pokemon.abilities.map(it => it.ability.name);

        const abilitiesName = pokemon.abilities.meuMap((it, index) => it.ability.name);

        console.log(abilitiesName);

    } catch (err) {
        console.log('deu ruim', err);
    }
}

main();