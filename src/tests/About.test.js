import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { About } from '../pages';

describe('Testando o componente <About.js />', () => {
  test('É exibido na tela um h2 com texto About Pokédex', () => {
    // acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <About />
      </Router>,
    );
    const text = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });

    // aferir
    expect(text).toBeInTheDocument();
  });
  test('O atributo src da imagem é o esperado', () => {
    // acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <About />
      </Router>,
    );
    const image = screen.getByRole('img');

    // aferir
    expect(image.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
