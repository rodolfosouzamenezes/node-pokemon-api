import express from 'express';
import pokemonController from './controller/PokemonController';
const app = express();
const port = 8000;

app.listen(port, () => {
    console.log(`A API está rodando na porta ${port}: http://localhost:${port}/`)
    console.log('A EDUZZ está voando');
});

app.get('/', pokemonController.main);

app.get('/:pokemonName', pokemonController.details);
