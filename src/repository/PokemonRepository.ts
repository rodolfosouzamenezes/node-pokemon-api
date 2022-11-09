import fs from 'fs';

class PokemonRepository {
    public async main() {
        const pokemonsList = fs.readFileSync('./DB/pokemons.json', 'utf-8');

        const objPokemons = JSON.parse(pokemonsList);

        return objPokemons;
    }

    public async details(pokemonName: string) {
        const pokemonDetails = fs.readFileSync(`./DB/${pokemonName}.json`, 'utf-8');

        const objPokemonDetails = JSON.parse(pokemonDetails);

        return objPokemonDetails;
    }
}

export default new PokemonRepository();