import express from 'express';
import pokemonController from './controller/PokemonController';
const app = express();

app.listen(8000, () => {
    console.log(' eduzz está voando');
});

app.get('/', pokemonController.main);
