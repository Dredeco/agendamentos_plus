import * as jwt from 'jsonwebtoken';
import * as nodemailer from 'nodemailer';

interface User {
  name: string;
  email: string;
}

const secretKey = 'suaChaveSecreta'; // Substitua pela sua chave secreta
const emailSender = 'seuEmail@gmail.com'; // Substitua pelo seu e-mail
const emailPassword = 'suaSenha'; // Substitua pela sua senha
const emailService = 'gmail'; // Substitua pelo serviço de e-mail que você está usando

async function CadastrarUsuario(newUser: User): Promise<void> {
  try {
    // Criar o token JWT
    const token = jwt.sign(newUser, secretKey, { expiresIn: '1h' });

    // Configurar o serviço de e-mail
    const transporter = nodemailer.createTransport({
      service: emailService,
      auth: {
        user: emailSender,
        pass: emailPassword,
      },
    });

    // Configurar o e-mail
    const mailOptions = {
      from: emailSender,
      to: newUser.email,
      subject: 'Token de Autenticação',
      text: `Olá ${newUser.name},\n\nUse este token para fazer login: ${token}`,
    };

    // Enviar o e-mail
    await transporter.sendMail(mailOptions);

    console.log('Token enviado por e-mail com sucesso!');
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
  }
}

// Exemplo de uso
const newUser: User = {
  name: 'Nome do Usuário',
  email: 'usuario@email.com',
};

export default CadastrarUsuario(newUser);