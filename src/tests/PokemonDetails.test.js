import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando o componente <PokemonDetails.js />', () => {
  const path = '/pokemons/25';
  test('Teste se as informações detalhadas do pokémon são mostradas na tela', () => {
    // acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const link = screen.getByRole('link', { name: /More details/i });
    expect(link).toBeInTheDocument();

    // agir
    userEvent.click(link);
    expect(history.location.pathname).toBe(path);

    // aferir
    const name = screen.getByRole('heading', { name: /Pikachu Details/i, level: 2 });
    const summary = screen.getByRole('heading', { name: /Summary/i, level: 2 });
    const paragraph = screen.getByText(/This intelligent Pokémon ro/i);

    expect(name).toBeInTheDocument();
    expect(link).not.toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
  test('Teste se há uma seção com os mapas contendo as localizações do pokémon', () => {
    // acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const link = screen.getByRole('link', { name: /More details/i });
    expect(link).toBeInTheDocument();

    // agir
    userEvent.click(link);
    expect(history.location.pathname).toBe(path);

    // aferir
    const locationText = screen
      .getByRole('heading', { name: /Game Locations of Pikachu/i, level: 2 });
    const loc1 = screen.getByText(/Kanto Viridian Forest/i);
    const loc2 = screen.getByText(/Kanto Power Plant/i);
    const image = screen.getAllByAltText('Pikachu location');

    expect(locationText).toBeInTheDocument();
    expect(loc1).toBeInTheDocument();
    expect(loc2).toBeInTheDocument();
    expect(image[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(image[1].src).toBe('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });
  test('Teste se pode favoritar um pokémon através da página de detalhes', () => {
    // acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const link = screen.getByRole('link', { name: /More details/i });
    expect(link).toBeInTheDocument();

    // agir
    userEvent.click(link);
    expect(history.location.pathname).toBe(path);

    const favCheck = screen.getByLabelText(/Pokémon favoritado/i);

    // aferir
    expect(favCheck).toBeInTheDocument();
  });
});
