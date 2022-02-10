import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  //ACESSAR OS ELEMENTOS NA TELA
  render(<App />);

  //FAZER OS TESTES
  const inputEmail = screen.getByLabelText(/email/i); 
  /*( /string/i é utilizado para ignorar case sensitive , ou seja, não diferenciar letras maiúsculas e minúsculas) */
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});


test('Verificando se existe dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});

test('Verificando se existe um botão de enviar', () => {
  render(<App />);
  const btnSend = screen.getByTestId('id-send');
  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveProperty('type', 'button');
  expect(btnSend).toHaveValue('Enviar');
});