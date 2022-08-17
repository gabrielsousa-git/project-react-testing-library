import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando o componente <Pokemon.js />', () => {
  test('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    // acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const name = screen.getByTestId('pokemon-name');
    const type = screen.getByTestId('pokemon-type');
    const weight = screen.getByTestId('pokemon-weight');
    const image = screen.getByAltText('Pikachu sprite');

    // aferir
    expect(name.textContent).toBe('Pikachu');
    expect(type.textContent).toBe('Electric');
    expect(weight.textContent).toBe('Average weight: 6.0 kg');
    expect(image.src).toContain('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(image).toBeInTheDocument();
  });
  test('Teste se o card do pokémon contém um link para exibir detalhes.', () => {
    // acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const link = screen.getByRole('link', { name: /More details/i });

    // aferir
    expect(link.href).toBe('http://localhost/pokemons/25');
  });
  test('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
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
    expect(history.location.pathname).toBe('/pokemons/25');

    const favCheck = screen.getByLabelText(/Pokémon favoritado/i);
    expect(favCheck).toBeInTheDocument();

    userEvent.click(favCheck);

    // aferir
    const star = screen.getByAltText('Pikachu is marked as favorite');
    expect(star.src).toBe('http://localhost/star-icon.svg');
    expect(star).toBeInTheDocument();
  });
});
