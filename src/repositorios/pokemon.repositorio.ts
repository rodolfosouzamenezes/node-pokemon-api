import fs from 'fs';

export default class PokemonRepositorio {
    public listaTodos(): any {
        const pokemons = fs.readFileSync('./pokemons/pokemons.json', 'utf8');
        const objPokemons = JSON.parse(pokemons);
        return objPokemons;
    }

    public listaUmPokemon(nomePokemon: string): any {
        const nome = `./pokemons/${nomePokemon}.json`;
        const pokemons = fs.readFileSync(nome, 'utf8');
        const objPokemons = JSON.parse(pokemons);
        return objPokemons;
    }
}
