import express, { Request, Response } from 'express';
import PokemonControlador from './controladores/pokemon.controlador';

const controlador = new PokemonControlador();

const app = express();

app.use(express.json());

app.listen(8000, () => {
    console.log('Hello World!!!');
})

app.get('/', (req: Request, res: Response) => {
    return res.json({
        "versao": "1.0.0"
    })
})

app.get('/pokemons', controlador.listaTodos)

app.get('/pokemons/:nomePokemon', controlador.listaUmPokemon)

app.post('/pokemons', (req: Request, res: Response) => {
    try {
        const { nome, tipo, poder } = req.body;

        return res.json({ nome, tipo, poder });
    } catch (error) {
        return res.json({
            "mensagem": error
        })
    }
})