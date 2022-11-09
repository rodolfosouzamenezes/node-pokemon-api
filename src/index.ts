import express, { Request, Response } from 'express';
import fs from 'fs';

const app = express();

app.use(express.json());

app.listen(8000, () => {
    console.log('hello world again');
})

app.get('/', (req: Request, res: Response) => {
    return res.json({
        "mensagem": "primeira rota"
    })
})

app.post('/', (req: Request, res: Response) => {
    return res.json({
        "mensagem": "rota post"
    })
})

app.get('/pokemons', (req: Request, res: Response) => {
    try {
        const pokemons = fs.readFileSync('./pokemon/pokemons.json', 'utf8');
        const objPokemons = JSON.parse(pokemons);

        return res.json(objPokemons);
    } catch (e) {
        return res.json({
            "mensagem": e
        })
    }
})

app.get('/:nomePokemon', (req: Request, res: Response) => {
    return res.json({
        "Nome do Pokemon": req.params.nomePokemon
    })
})

app.get('/pokemons/:nomePokemon', (req: Request, res: Response) => {
    try {

        const nome = `./pokemon/${req.params.nomePokemon}.json`;
        const pokemons = fs.readFileSync(nome, 'utf8');
        const objPokemons = JSON.parse(pokemons);

        return res.json(objPokemons);
    } catch (e) {
        return res.json({
            "mensagem": e
        })
    }
})

app.post('/pokemons', (req: Request, res: Response) => {
    try {

        const nome = req.body.nome;
        const tipo = req.body.tipo;
        const poder = req.body.poder;

        return res.json({nome, tipo, poder});
    } catch (e) {
        return res.json({
            "mensagem": e
        })
    }
})