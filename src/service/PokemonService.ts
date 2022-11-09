import PokemonRepository from "../repository/PokemonRepository";

class PokemonService {
    public async main() {
        const retornoDaRepository = await PokemonRepository.main();

        return retornoDaRepository;
    }

    public async details(pokemonName: string) {
        const retornoDaRepository = await PokemonRepository.details(pokemonName);

        return retornoDaRepository;
    }
}

export default new PokemonService();
