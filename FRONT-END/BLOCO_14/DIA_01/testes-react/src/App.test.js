import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe("Tela de inserção de 'Email'", () => {
  it('Verificando se existe o campo Email.', () => {
    //ACESSAR OS ELEMENTOS NA TELA
    render(<App />);

    //FAZER OS TESTES
    const inputEmail = screen.getByLabelText(/email/i); 
    /*( /string/i é utilizado para ignorar case sensitive , ou seja, não diferenciar letras maiúsculas e minúsculas) */
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });


  it('Verificando se existe dois botões', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('Verificando se existe um botão de enviar', () => {
    render(<App />);
    const btnSend = screen.getByTestId('id-send');
    expect(btnSend).toBeInTheDocument();
    expect(btnSend).toHaveProperty('type', 'button');
    expect(btnSend).toHaveValue('Enviar');
  });

  it('Verificando se o botão e o campo email estão funcionando.', () => {
    render(<App />);

    const EMAIL_USER = 'email@email.com';

    const textEmail = screen.getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');

    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(btnSend);

    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
  });
})

