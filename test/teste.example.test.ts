import PokemonRepositorio from '../src/repositorios/pokemon.repositorio';

const repositorio = new PokemonRepositorio();

describe('Testa alguma funcionalidade ...', () => {
    test("Deve ...", function () {
        const teste = 'testado';
        expect(teste).toBe('testado');
    });

    test("Deve Listar Todos os Pokemons", function () {
        const pokemons = repositorio.listaTodos();
        expect(pokemons).toBeTruthy();
        expect(pokemons).toHaveLength(34);
    });
});