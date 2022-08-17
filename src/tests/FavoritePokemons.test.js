import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { FavoritePokemons } from '../pages';

describe('Testando o componente <FavoritePokemons.js />', () => {
  test('É exibido na tela a mensagem No favorite pokemon found', () => {
    // acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <FavoritePokemons />
      </Router>,
    );
    const text = screen.getByText('No favorite pokemon found');

    // aferir
    expect(text).toBeInTheDocument();
  });
});
