import { Request, Response } from 'express';
import pokemonService from '../service/PokemonService';

class PokemonController {
    public async main(req: Request, res: Response) {
        const listPokemons = await pokemonService.main();

        return res.json({
            message: listPokemons
        });
    }
}

export default new PokemonController();