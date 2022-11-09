import { Request, Response } from 'express';
import PokemonRepositorio from "../repositorios/pokemon.repositorio";

const repositorio = new PokemonRepositorio();

export default class PokemonControlador {
    public listaTodos(req: Request, res: Response) {
        try {
            const pokemons = repositorio.listaTodos();
            return res.json(pokemons);
        } catch (error) {
            return res.json({
                "mensagem": error
            })
        }
    }

    public listaUmPokemon(req: Request, res: Response) {
        try {
            const objPokemons = repositorio.listaUmPokemon(req.params.nomePokemon);
            return res.json(objPokemons);
        } catch (error) {
            return res.json({
                "mensagem": error
            })
        }
    }
}