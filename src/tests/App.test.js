import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import App from '../App';

describe('Testando o componente <App.js />', () => {
  test('É exibido na tela um link com o texto Home', () => {
    // acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const linkHome = screen.getByRole('link', { name: /Home/i });

    // aferir
    expect(linkHome).toBeInTheDocument();
  });
  test('É exibido na tela um link com o texto About', () => {
    // acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const linkAbout = screen.getByRole('link', { name: /About/i });

    // aferir
    expect(linkAbout).toBeInTheDocument();
  });
  test('É exibido na tela um link com o texto Favorite Pokémons', () => {
    // acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const linkFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });

    // aferir
    expect(linkFavorite).toBeInTheDocument();
  });
});
