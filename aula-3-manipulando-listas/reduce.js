const { obterPokemon } = require('./service-pokemon');

Array.prototype.meuReduce = function (callback, valorInicial) {

    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];

    for (let index = 0; index <= this.length - 1; index++) {
        valorFinal = callback(valorFinal, this[index]);
    }

    return valorFinal;

}


async function main() {

    try {

        const pokemon = await obterPokemon('charmander');
        const abilitiesSlots = pokemon.abilities.map(it => it.slot);

        // é interessante passar o valor 0 de iniciação no reduce, pois caso não exista valor ele vai quebrar.
        const totalSlots = abilitiesSlots.reduce((anterior, proximo) => {
            return anterior + proximo
        }, 0);

        console.log(totalSlots);

        const baseStats = pokemon.stats.map(it => it.base_stat);

        const totalStats = baseStats.meuReduce((anterior, proximo) =>  anterior + proximo, 0);
        console.log(totalStats);

    } catch (error) {
        console.log('deu erro', error);
    }
}

main();