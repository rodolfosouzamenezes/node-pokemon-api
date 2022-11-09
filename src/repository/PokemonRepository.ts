import fs from 'fs';

class PokemonRepository {
    public async main() {
        const pokemonsList = fs.readFileSync('./DB/pokemons.json', 'utf-8');

        const objPokemons = JSON.parse(pokemonsList);

        return objPokemons;
    }
}

export default new PokemonRepository();