const service = require('./service-pokemon');


async function main() {

    try {

        const result = await service.obterPokemon('charmander');

        const abilities = [];

        console.time('for');
        for (let i = 0; i <= result.abilities.length - 1; i++){
            const ability = result.abilities[i];
            abilities.push(ability.ability.name);

        }
        console.timeEnd('for'); // 0.284ms

        console.time('forin');
        for(let i in result.abilities){
            const ability = result.abilities[i];
            abilities.push(ability.ability.name);
        }
        console.timeEnd('forin'); // 0.009ms

        console.time('forof');
        for(ability of result.abilities){
            abilities.push(ability.ability.name);
        }
        console.timeEnd('forof'); //0.016ms


        console.log(abilities);


    } catch (error) {
        console.log(`error: ${error}`);
    }

}


main();