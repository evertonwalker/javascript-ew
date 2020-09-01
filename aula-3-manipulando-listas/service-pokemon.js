const axios = require('axios');
const URL = `https://pokeapi.co/api/v2/pokemon`;


async function obterPokemon(nome) {

    const url = `${URL}/${nome}`;
    const response = await axios.get(url);

    return response.data;

}

module.exports = { 
    obterPokemon
}