import { Request, Response } from 'express';
import pokemonService from '../service/PokemonService';

class PokemonController {
    public async main(req: Request, res: Response) {
        const listPokemons = await pokemonService.main();

        return res.json({
            message: listPokemons
        });
    }

    public async details(req: Request, res: Response) {
        const pokemonDetails = await pokemonService.details(req.params.pokemonName);

        return res.json({
            message: pokemonDetails
        });
    }
}

export default new PokemonController();