import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import App from '../App';

describe('Testando o componente <Pokedex.js />', () => {
  test('É exibido na tela um h2 com texto Encountered pokémons', () => {
    // acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const text = screen.getByRole('heading', { name: /Encountered pokémons/i, level: 2 });

    // aferir
    expect(text).toBeInTheDocument();
  });
});
