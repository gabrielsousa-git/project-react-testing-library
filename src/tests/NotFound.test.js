import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { NotFound } from '../pages';

describe('Testando o componente <NotFound.js />', () => {
  test('É exibido na tela um h2 com texto Page requested not found', () => {
    // acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <NotFound />
      </Router>,
    );
    const text = screen
      .getByRole('heading', { name: /Page requested not found/i, level: 2 });

    // aferir
    expect(text).toBeInTheDocument();
  });
  test('O atributo src da imagem é o esperado', () => {
    // acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <NotFound />
      </Router>,
    );
    const image = screen
      .getByAltText('Pikachu crying because the page requested was not found');

    // aferir
    expect(image.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
