import PokemonRepository from "../repository/PokemonRepository";

class PokemonService {
    public async main() {
        const retornoDaRepository = await PokemonRepository.main();

        return retornoDaRepository;
    }
}

export default new PokemonService();
